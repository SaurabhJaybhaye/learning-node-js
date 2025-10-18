const fs = require("fs").promises;
const path = require("path");
const { isFileFolderExists } = require("../../utils"); // Assume this is still sync

const filePath = path.join(__dirname, "temp_files", "fs_modules.txt");
async function main() {
  try {
    if (isFileFolderExists(filePath)) {
      await append();
    } else {
      await create();
    }

    await read();
    await removeDirectory();
  } catch (err) {
    console.error("Error in main:", err);
  }
}

async function append() {
  try {
    await fs.appendFile(filePath, "\n fs modules welcome.");
  } catch (err) {
    console.log("Append err", err);
    throw err;
  }
}

async function create() {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "fs modules welcome.");
  } catch (err) {
    console.log("Create err", err);
    throw err;
  }
}

async function read() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    console.log("data", data);
  } catch (err) {
    console.log("Read err", err);
    throw err;
  }
}

async function removeDirectory() {
  try {
    await fs.rm("temp_files", { recursive: true, force: true });
    console.log("Folder deleted!");
  } catch (err) {
    console.log("Remove err", err);
    throw err;
  }
}

main();
