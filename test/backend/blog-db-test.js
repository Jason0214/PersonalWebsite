import assert from 'assert';
import path from 'path';
import DBconnection from 'utils/connect-db';
import fs from 'utils/promise-fs';
import { BlogHeader, resetBlogDatabase, updateBlogHeader, getBlogHeader } from 'models/blog';
import { getAllBlogHeaders } from '../../backend/models/blog/blog-database';

const databaseName = 'test.db';
const DBDirectory = path.join(__dirname, '..', '..', 'backend', 'database')
const DBSchemaPath = path.join(DBDirectory, 'schema.sql');

function jsonToBlogHeader (blogHeaderJson) {
  return new BlogHeader(
    blogHeaderJson.title,
    blogHeaderJson.abstract,
    blogHeaderJson.cover
  );
}

describe('database tests', function () {
  beforeEach(async function () {
    let db_connection = new DBconnection(databaseName);
    let schemaBuf = await fs.readFile(DBSchemaPath);
    let schemaSentences = schemaBuf.toString('utf8').split(';').filter(
      (str) => {
        return !str.match(/^\s*$/);
      }
    );
    for (let i = 0; i < schemaSentences.length; i++) {
      await db_connection.mutation(schemaSentences[i]);
    }
    db_connection.close();
    // set blog database
    resetBlogDatabase(databaseName);
  });

  it('insert a new blog to database', async function () {
    let newBlog = new BlogHeader(
      'test blog',
      'this is a test blog',
      '/static/default.jpg'
    )

    await updateBlogHeader(newBlog);

    let newBlogInDb = await getBlogHeader(1);

    assert.strictEqual(newBlogInDb.id, 1)
    assert.strictEqual(newBlog.title, newBlogInDb.title);
    assert.strictEqual(newBlog.abstract, newBlogInDb.abstract);
    assert.strictEqual(newBlog.cover, newBlogInDb.cover);
  })

  it('get all blogs from database', async function () {
    let testCases = [
      {
        'title': 'test1',
        'abstract': 'this is test blog 1',
        'cover': '/static/default.jpg'
      },
      {
        'title': 'test2',
        'abstract': 'this is test blog 2',
        'cover': '/static/default.jpg'
      },
      {
        'title': 'test2',
        'abstract': 'this is test blog 2',
        'cover': '/static/default.jpg'
      }
    ];

    for (let i = 0; i < testCases.length; i++) {
      await updateBlogHeader(jsonToBlogHeader(testCases[i]));
    }

    let blogList = await getAllBlogHeaders();

    assert(blogList.length === testCases.length);
    for (let i = 0; i < blogList.length; i++) {
      assert.strictEqual(blogList[i].id, i + 1);
      assert.strictEqual(blogList[i].title, testCases[i].title);
      assert.strictEqual(blogList[i].abstract, testCases[i].abstract);
      assert.strictEqual(blogList[i].cover, testCases[i].cover);
    }
  })

  it('update existed blog', async function() {
    let newBlogHeader = new BlogHeader(
      'test blog',
      'this is a test blog',
      '/static/default.jpg'
    )

    await updateBlogHeader(newBlogHeader);

    let blogFromDB = await getBlogHeader(1);
    assert.strictEqual(blogFromDB.id, 1);
    assert.strictEqual(blogFromDB.title, newBlogHeader.title);

    let changed_title = 'test blog title changed';
    blogFromDB.title = changed_title;
    await updateBlogHeader(blogFromDB);

    blogFromDB = await getBlogHeader(1);
    assert.strictEqual(blogFromDB.id, 1);
    assert.strictEqual(blogFromDB.title, changed_title);
  })

  afterEach(async function () {
    await fs.deleteFile(path.join(DBDirectory, databaseName));
  })
});
