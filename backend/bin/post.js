//
// post a blog
//

import path from 'path';
import fs from 'fs';
import promisFs from 'utils/promise-fs';
import { addNewBlog } from 'models/blog';

const blogDraftDir = path.join(__dirname, '..', 'models', 'blog', 'drafts');

if (process.argv.length !== 3) {
  console.log('Error: Wrong arguments number, require only the filename of the blog need to be posted.');
  process.exit(1);
}

let blogFilePath = process.argv[2];

promisFs.readFile(blogFilePath)
  .then((fileData) => {
    let fileContent = fileData.toString('utf-8');
    return addNewBlog(fileContent);
  })
  .catch((err) => {
    console.log(err.toString());
  });

fs.rename(blogFilePath, path.join(blogDraftDir, path.basename(blogFilePath)), (err) => {
  if (err) {
    console.log(err.toString());
  }
});
