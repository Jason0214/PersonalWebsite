import path from 'path';
import fs from 'utils/promise-fs';

const blogStorage = path.join(__dirname, 'storage');

function blogId2FilePath (blogId) {
  return path.join(blogStorage, blogId + '.md');
}

async function getBlogText (blogId) {
  let ret = null;
  try {
    let fileData = await fs.readFile(blogId2FilePath(blogId));
    ret = fileData.toString('utf8');
  } catch (err) {
    ret = 'Not Found';
  }
  return ret;
}

async function updateBlogText (blogId, newText) {
  await fs.saveToFile(blogId2FilePath(blogId), newText);
}

export {
  getBlogText,
  updateBlogText
};
