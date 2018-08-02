import fileSystem from 'fs';

export default {
  readFile (filePath) {
    return new Promise((resolve, reject) => {
      fileSystem.readFile(filePath, function (err, fileData) {
        if (err) {
          reject(err);
        }
        resolve(fileData);
      });
    });
  },
  saveToFile (filePath, fileData) {
    return new Promise((resolve, reject) => {
      fileSystem.writeFile(filePath, fileData, function (err) {
        if (err) {
          reject(err);
        }
        resolve(null);
      });
    });
  },
  deleteFile (filePath) {
    return new Promise((resolve, reject) => {
      fileSystem.unlink(filePath, function (err) {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(true);
      });
    });
  }
};
