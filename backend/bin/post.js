//
// post a blog
//

import path from 'path';
import fs from 'utils/promise-fs';
import addNewBlog from 'models/blog';

const blogDraftDir = path.join(__dirname, '..', 'models', 'blog', 'drafts');

if (process.argv.length !== 3) {
  console.log('Error: Wrong arguments number, require only the filename of the blog need to be posted.');
  process.exit(1);
}

let blogFilePath = process.argv[2];

fs.readFile(blogFilePath)
  .then((fileData) => {
    let fileContent = fileData.toString('utf-8');
    console.log(fileContent);
    return addNewBlog(fileContent);
  })
  .catch((err) => {
    console.log(err.toString());
  });

fs.rename(blogFilePath, path(blogDraftDir, path.basename(blogFilePath)), (err) => {
  console.log(err.toString());
});
