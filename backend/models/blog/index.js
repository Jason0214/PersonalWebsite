import fs from 'utils/promise-fs';
import path from 'path';

const blogStorage = path.join(__dirname, 'storage');

export default {
  getMarkDownTxt: async function (name) {
    let ret = null;
    try {
      let fileData = await fs.readFile(path.join(blogStorage, name));
      ret = fileData.toString('utf8');
    } catch (err) {
      ret = 'Not Found';
    }
    return ret;
  }
};
