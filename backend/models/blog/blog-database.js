import DBConnection from 'utils/connect-db';
import BlogHeader from './blog-header';

let blogDatabase = 'main.db';

// api convenient for testing
function resetBlogDatabase (newDB) {
  blogDatabase = newDB;
}

function blogHeaderFactory (dbResult) {
  return new BlogHeader(
    dbResult['title'],
    dbResult['abstract'],
    dbResult['cover_path'],
    dbResult['id']
  );
}

async function insertBlogHeader (title, abstract, cover) {
  let db = new DBConnection(blogDatabase);
  let newBlogId = await db.mutation(
    `INSERT INTO blogs (title, abstract, edit_time, cover_path) VALUES(?, ?, DATETIME(), ?)`,
    [title, abstract, cover]
  );
  db.close();
  return newBlogId;
}

async function updateBlogHeader (blogHeader) {
  let db = new DBConnection(blogDatabase);
  await db.mutation(
    `UPDATE blogs SET title = ?, abstract = ?, edit_time = DATETIME(), cover_path = ? WHERE id = ?`,
    [blogHeader.title, blogHeader.abstract, blogHeader.cover, blogHeader.id]
  );
  db.close();
}

async function getBlogHeader (blogId) {
  let db = new DBConnection(blogDatabase);
  let resultList = await db.query(`SELECT * FROM blogs WHERE id = ?`, [blogId]);
  db.close();
  return blogHeaderFactory(resultList[0]);
}

async function getAllBlogHeaders () {
  let db = new DBConnection(blogDatabase);
  let resultList = await db.query(`SELECT * FROM blogs`);
  db.close();
  return resultList.map(blogHeaderFactory);
}

export {
  resetBlogDatabase,
  insertBlogHeader,
  updateBlogHeader,
  getBlogHeader,
  getAllBlogHeaders
};
