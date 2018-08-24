import fs from 'fs';
import assert from 'assert';
import path from 'path';
import { rewriteImageUrl } from 'models/blog/text-parser';

const rootDir = path.join(__dirname, '..', '..', 'backend');

describe('test blog text parser functions', async function () {
  it("test rewrite image link and download", async function () {
    let originalText = 'lalala![aaaaaa](https://avatars0.githubusercontent.com/u/6615685?s=70&v=4)gasdgaf';
    let rewrittenText = await rewriteImageUrl(originalText);

    let imageUrlRegex = /!\[([^\]]+)\]\(([^)]+)\)/;
    let originalTextMatch = imageUrlRegex.exec(originalText);
    let rewrittenTextMatch = imageUrlRegex.exec(rewrittenText);
    console.log(rewrittenText);

    assert(originalTextMatch[1] === rewrittenTextMatch[1]);
    assert(originalTextMatch[2] !== rewrittenTextMatch[2]);

    let imageLocalPath = path.join(rootDir, rewrittenTextMatch[2]);
    assert(fs.existsSync(imageLocalPath));
    fs.unlinkSync(imageLocalPath);
  })
})
