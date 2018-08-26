import path from 'path';
import { updateBlog } from 'models/blog';

if (process.argv.length !== 3) {
  console.log('Error: Wrong arguments number, require only the filename of the blog need to be posted.');
  process.exit(1);
}

let postedBlogPath = process.argv[2];

let postedDirPath = path.dirname(postedBlogPath);
if (!postedDirPath.endsWith('blog/posts')) {
  console.log('Error: Updated blog must be in posted directory.');
  process.exit(1);
}

updateBlog(path.basename(postedBlogPath));
