//
// post a blog
//

import fs from 'utils/promise-fs';

if (process.argv.length !== 3) {
  console.log('Error: Wrong arguments number, require only the filename of the blog need to be posted.');
  process.exit(1);
}

let blogFilePath = process.argv[2];

fs.readFile(blogFilePath)
  .then((fileData) => {
    let fileContent = fileData.toString('utf-8');
    console.log(fileContent);
  })
  .catch((err) => {
    console.log(err.toString());
  });
