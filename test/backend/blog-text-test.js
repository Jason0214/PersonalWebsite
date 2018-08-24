import fs from 'fs';
import assert from 'assert';
import path from 'path';
import { rewriteImageUrl, getBlogCover, getBlogTitle, getBlogAbstract } from 'models/blog/text-parser';

const rootDir = path.join(__dirname, '..', '..', 'backend');
const  imageUrlRegex = /!\[([^\]]+)\]\(([^)]+)\)/;

describe('test blog text parser functions', function () {
  it("getting title and abstract from blog text", function () {
    let text = `
      # This is the blog title
        This is the abstract.

      hahahahah
      # Another title
      hahahahha
    `;

    assert.strictEqual(getBlogTitle(text), 'This is the blog title');
    assert.strictEqual(getBlogAbstract(text), 'This is the abstract.');
  })

  it("get first image path from blog text as cover", function () {
    let text = "aaaaa![aaa](/static/testcover.jpg)";
    assert.strictEqual(getBlogCover(text), "/static/testcover.jpg");
  })

  it("get default cover if no image in blog", function () {
    let text = "aaaaaa";
    assert.strictEqual(getBlogCover(text), "/static/defaultCover.jpg");
  })

  it("ensure default cover exists", function () {
    let imageLocalPath = path.join(rootDir, '/static/defaultCover.jpg');
    assert(fs.existsSync(imageLocalPath));
  })

  it("invalid image link", async function () {
    let originalText = '![hhhh](this/is/a/invalid/link)';
    let rewrittenText = await rewriteImageUrl(originalText);
    assert.strictEqual(imageUrlRegex.exec(rewrittenText)[2], '/static/NotFound.png');
  })

  it("invalid image MIME type", async function () {
    let originalText = '![hhhh](https://github.com/)';
    let rewrittenText = await rewriteImageUrl(originalText);
    assert.strictEqual(imageUrlRegex.exec(rewrittenText)[2], '/static/NotFound.png');
  })

  it("make sure not found jpg exists", function () {
    let imageLocalPath = path.join(rootDir, '/static/NotFound.png');
    assert(fs.existsSync(imageLocalPath));
  })

  it("rewrite image link and download", async function () {
    let originalText = 'lalala![aaaaaa](https://avatars0.githubusercontent.com/u/6615685?s=70&v=4)gasdgaf';
    let rewrittenText = await rewriteImageUrl(originalText);

    let originalTextMatch = imageUrlRegex.exec(originalText);
    let rewrittenTextMatch = imageUrlRegex.exec(rewrittenText);

    assert.strictEqual(originalTextMatch[1], rewrittenTextMatch[1]);
    assert.notEqual(originalTextMatch[2], rewrittenTextMatch[2]);

    let imageLocalPath = path.join(rootDir, rewrittenTextMatch[2]);
    assert(fs.existsSync(imageLocalPath));
    fs.unlinkSync(imageLocalPath);
  });
})
