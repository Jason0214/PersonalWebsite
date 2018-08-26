//
// post a blog
//

import path from 'path';
import fs from 'fs';
import promisFs from 'utils/promise-fs';
import { addNewBlog } from 'models/blog';

const blogDraftDir = path.join(__dirname, 'blogDrafts');

if (process.argv.length !== 3) {
  console.log('Error: Wrong arguments number, require only the filename of the blog need to be posted.');
  process.exit(1);
}

let blogDraftPath = process.argv[2];

promisFs.readFile(blogDraftPath)
  .then((fileData) => {
    let fileContent = fileData.toString('utf-8');
    return addNewBlog(fileContent);
  })
  .catch((err) => {
    console.log(err.toString());
  });

fs.rename(blogDraftPath, path.join(blogDraftDir, path.basename(blogDraftPath)), (err) => {
  if (err) {
    console.log(err.toString());
  }
});
