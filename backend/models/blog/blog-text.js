import path from 'path';
import fs from 'utils/promise-fs';
import { rewriteImageUrl, getBlogTitle, getBlogCover, getBlogAbstract } from './text-parser';
import { insertBlogHeader } from './blog-database';

const blogPostsStorage = path.join(__dirname, 'posts');

function blogId2FilePath (blogId) {
  return path.join(blogPostsStorage, blogId + '.md');
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
  // TODO
  await fs.saveToFile(blogId2FilePath(blogId), newText);
}

async function addNewBlog (newText) {
  let parsedText = await rewriteImageUrl(newText);
  let title = getBlogTitle(parsedText);
  let abstract = getBlogAbstract(parsedText);
  let cover = getBlogCover(parsedText);
  let blogId = await insertBlogHeader(title, abstract, cover);
  await fs.saveToFile(blogId2FilePath(blogId), parsedText);
}

export {
  getBlogText,
  addNewBlog,
  updateBlogText
};
