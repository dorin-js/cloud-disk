const fs = require("fs");
const File = require("../models/File");
const config = require("config");

class FileService {
  //create folders, where (file) is object model from db
  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: "File was created" });
        } else return reject({ message: "File already exists" });
      } catch (error) {
        return reject({ message: "File error" });
      }
    });
  }
}

module.exports = new FileService();
