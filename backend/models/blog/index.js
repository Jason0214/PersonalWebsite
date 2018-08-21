import fs from 'utils/promise-fs';
import path from 'path';
import DBConnection from 'utils/connect-db';

const blogStorage = path.join(__dirname, 'storage');

class Blog {
  constructor (id, title, abstract) {
    this.id = id;
    this._title = title;
    this._abstract = abstract;
    this._is_dirty = true;
  }
  get title () {
    return this._title;
  }
  set title (newTitle) {
    this._title = newTitle;
    this._is_dirty = true;
  }
  get abstract () {
    return this._abstract;
  }
  set abstract (newAbstract) {
    this._abstract = newAbstract;
    this._is_dirty = true;
  }
}

async function getAllBlogs () {
  let db = new DBConnection('main.db');
  let result = await db.query('SELECT * FROM blogs');
  return result;
}

async function getBlogText (blogId) {
  let ret = null;
  try {
    let fileData = await fs.readFile(path.join(blogStorage, this.title));
    ret = fileData.toString('utf8');
  } catch (err) {
    ret = 'Not Found';
  }
  return ret;
}

export {
  Blog, getAllBlogs, getBlogText
};
