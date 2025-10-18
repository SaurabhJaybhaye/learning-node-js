const fs = require("fs");

function isFileFolderExists(name) {
  try {
    fs.accessSync(name, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  isFileFolderExists,
};
