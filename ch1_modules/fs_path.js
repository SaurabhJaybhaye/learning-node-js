// fs_path.js
const fs = require("fs");
const path = require("path");
const { isFileFolderExists } = require("../utils");

const filePath = path.join(__dirname, "temp_files", "fs_modules.txt");

function fsMain(content = "\n fs modules welcome.") {
  if (isFileFolderExists(filePath)) {
    append();
  } else {
    create();
  }

  function append() {
    try {
      fs.appendFileSync(filePath, content);
    } catch (err) {
      console.log("Append err", err);
      throw err;
    }
  }

  function create() {
    try {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content);
    } catch (err) {
      console.log("Create err", err);
      throw err;
    }
  }

  function read() {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      console.log("data", data);
    } catch (err) {
      console.log("Read err", err);
      throw err;
    }
  }

  function removeDirectory() {
    try {
      fs.rmSync("temp_files", { recursive: true, force: true });
      console.log("Folder deleted!");
    } catch (err) {
      console.log("Remove err", err);
      throw err;
    }
  }

  read();
  removeDirectory();
}

exports.module = {
  fsMain,
};
