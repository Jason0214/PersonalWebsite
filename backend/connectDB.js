import sqlite3 from 'sqlite3';
import path from 'path';

class Connection {
  constructor (dbName) {
    this.open(dbName);
  }
  async open (dbName) {
    this.db = new Promise((resolve, reject) => {
      let dbConnection = new sqlite3.Database(path.join(__dirname, '..', 'sqliteDB', dbName), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(dbConnection);
        }
      });
    });
  }
  async query (sqlSentence, argList) {
    this.db = await this.db;
    return new Promise((resolve, reject) => {
      this.db.all(sqlSentence, argList, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  async mutation (sqlSentence, argList) {
    this.db = await this.db;
    return new Promise((resolve, reject) => {
      this.db.run(sqlSentence, argList, (err) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  close () {
    if (this.db) {
      this.db.close();
    }
  }
};

export default Connection;
