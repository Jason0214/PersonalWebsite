import fs from 'fs';
import path from 'path';
import request from 'request';
import crypto from 'crypto';
import gm from 'gm';

const ImageStorageDir = path.join(__dirname, '..', '..', 'static');

function downloadImage (imageUrl) {
  // reference: https://stackoverflow.com/questions/12740659/downloading-images-with-node-js
  return new Promise((resolve, reject) => {
    request.head(imageUrl, function (err, res, body) {
      if (err) {
        reject(err);
      } else {
        let mimeType = res.headers['content-type'].split('/');
        if (mimeType[0] !== 'image') {
          reject(new Error('not return a image from ' + imageUrl));
        } else {
          let extension = '.' + mimeType[1];
          let tmpFileName = Buffer.from(imageUrl).toString('base64') + Date.now();

          request(imageUrl).pipe(fs.createWriteStream(tmpFileName))
            .on('close', function () {
              fs.readFile(tmpFileName, function (err, fileData) {
                if (err) {
                  reject(err);
                }
                let imageMd5 = crypto.createHash('md5').update(fileData).digest('hex');
                let imageFileName = imageMd5 + extension;
                fs.rename(tmpFileName, path.join(ImageStorageDir, imageFileName), function (err) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(imageFileName);
                  }
                });
              });
            });
        }
      }
    });
  });
}

function generateThumbNail (srcPath, width, height, outputPath, quality = 75) {
  return new Promise((resolve, reject) => {
    gm(srcPath).resize(width, height, '^').gravity('center').extent(width, height).quality(75).write(outputPath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function rewriteImageUrl (markdownText) {
  // reference: https://stackoverflow.com/questions/33631041/javascript-async-await-in-replace
  const imageUrlPromises = [];
  const imageUrlRegex = /!\[([^\]]+)\]\(([^)]+)\)/;
  markdownText.replace(imageUrlRegex, function (match, g1, g2) {
    if (!g2.startsWith('/static/')) {
      let newImageUrlPromise = downloadImage(g2)
        .then((imageFileName) => {
          return '/static/' + imageFileName;
        })
        .catch((err) => {
          console.log(err.toString());
          return '/static/NotFound.png';
        });
      imageUrlPromises.push(newImageUrlPromise);
    } else {
      imageUrlPromises.push(g2);
    }
    return match;
  });
  const data = await Promise.all(imageUrlPromises);
  return markdownText.replace(imageUrlRegex, function (match, g1, g2) {
    return '![' + g1 + '](' + data.shift() + ')';
  });
}

async function generateBlogCover (blogText) {
  const coverPathRegex = /!\[[^\]]+\]\(([^)]+)\)/;
  let coverPathMatch = coverPathRegex.exec(blogText);
  if (coverPathMatch === null) {
    return '/static/defaultCover.png';
  }

  let imgFileName = path.basename(coverPathMatch[1]);
  let imgNameAndExtension = imgFileName.split('.');
  let coverFileName = imgNameAndExtension[0] + '_cover.' + imgNameAndExtension[1];
  await generateThumbNail(
    path.join(ImageStorageDir, imgFileName),
    200, 200,
    path.join(ImageStorageDir, coverFileName)
  );
  return '/static/' + coverFileName;
}

function getBlogTitle (blogText) {
  const titleRegex = /# ([^\n]+)\n/;
  let titleMatch = titleRegex.exec(blogText);
  if (titleMatch === null) {
    console.log('Error: Can not find title in blog text');
    process.exit(1);
  }
  return titleMatch[1];
}

function getBlogAbstract (blogText) {
  const abstractRegex = /# [^\n]+\n\s*([^\n]+)\n/;
  let abstractMatch = abstractRegex.exec(blogText);
  if (abstractMatch === null) {
    console.log('Error: Can not find abstract in blog title');
    process.exit(1);
  }
  return abstractMatch[1];
}

export {
  rewriteImageUrl,
  getBlogTitle,
  generateBlogCover,
  getBlogAbstract
};