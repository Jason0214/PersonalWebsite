import assert from 'assert';
import path from 'path';
import DBconnection from 'utils/connect-db';
import fs from 'utils/promise-fs';
import { BlogHeader, resetBlogDatabase, insertBlogHeader, updateBlogHeader, getBlogHeader } from 'models/blog';
import { getAllBlogHeaders } from '../../backend/models/blog/blog-database';

const databaseName = 'test.db';
const DBDirectory = path.join(__dirname, '..', '..', 'backend', 'database')
const DBSchemaPath = path.join(DBDirectory, 'schema.sql');

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
    let blogData = {
      'title':'test blog',
      'abstract': 'this is a test blog',
      'cover': '/static/default.jpg'
    }

    let blogId = await insertBlogHeader(
      blogData.title,
      blogData.abstract,
      blogData.cover
    );

    let newBlog = await getBlogHeader(1);

    assert.strictEqual(blogId, 1);
    assert.strictEqual(newBlog.id, blogId)
    assert.strictEqual(blogData.title, newBlog.title);
    assert.strictEqual(blogData.abstract, newBlog.abstract);
    assert.strictEqual(blogData.cover, newBlog.cover);
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
      await insertBlogHeader(
        testCases[i].title,
        testCases[i].abstract,
        testCases[i].cover
      );
    }

    let blogList = await getAllBlogHeaders();

    assert.strictEqual (blogList.length, testCases.length);
    for (let i = 0; i < blogList.length; i++) {
      assert.strictEqual(blogList[i].id, i + 1);
      assert.strictEqual(blogList[i].title, testCases[i].title);
      assert.strictEqual(blogList[i].abstract, testCases[i].abstract);
      assert.strictEqual(blogList[i].cover, testCases[i].cover);
    }
  })

  it('update existed blog', async function() {
    let blogData = {
      'title':'test blog',
      'abstract': 'this is a test blog',
      'cover': '/static/default.jpg'
    }

    await insertBlogHeader(
      blogData.title,
      blogData.abstract,
      blogData.cover
    );

    let newBlog = await getBlogHeader(1);
    assert.strictEqual(newBlog.id, 1);
    assert.strictEqual(newBlog.title, blogData.title);

    let changed_title = 'test blog title changed';
    newBlog.title = changed_title;
    await updateBlogHeader(newBlog);

    let updatedBlog = await getBlogHeader(1);
    assert.strictEqual(updatedBlog.id, 1);
    assert.strictEqual(updatedBlog.title, changed_title);
  })

  afterEach(async function () {
    await fs.deleteFile(path.join(DBDirectory, databaseName));
  })
});
