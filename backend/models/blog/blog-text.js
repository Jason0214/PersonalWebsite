import path from 'path';
import fs from 'utils/promise-fs';
import { rewriteImageUrl, getBlogTitle, generateBlogCover, getBlogAbstract } from './text-parser';
import { insertBlogHeader, updateBlogHeader } from './blog-database';
import BlogHeader from './blog-header';

const blogPostsStorage = path.join(__dirname, 'posts');

function blogId2FilePath (blogId) {
  return path.join(blogPostsStorage, blogId + '.md');
}

function blogFileName2Id (blogFileName) {
  return blogFileName.split('.')[0];
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

async function addNewBlog (newText) {
  let parsedText = await rewriteImageUrl(newText);
  let title = getBlogTitle(parsedText);
  let abstract = getBlogAbstract(parsedText);
  let cover = await generateBlogCover(parsedText);
  let blogId = await insertBlogHeader(title, abstract, cover);
  await fs.saveToFile(blogId2FilePath(blogId), parsedText);
}

async function updateBlog (postedBlogName) {
  let blogId = blogFileName2Id(postedBlogName);
  let fileData = await fs.readFile(path.join(blogPostsStorage, postedBlogName));
  let newText = fileData.toString('utf-8');
  let parsedText = await rewriteImageUrl(newText);
  let title = getBlogTitle(parsedText);
  let abstract = getBlogAbstract(parsedText);
  let cover = await generateBlogCover(parsedText);
  let blogHeader = new BlogHeader(title, abstract, cover, blogId);
  await updateBlogHeader(blogHeader);
}

export {
  getBlogText,
  addNewBlog,
  updateBlog
};
