// index.js
const fsMain = require("./fs_path").module.fsMain;
const osMain = require("./os").module.osMain;
const httpMain = require("./http_server").module.httpMain;

// Start HTTP server
const systemInfo = osMain();
fsMain(systemInfo);
httpMain(systemInfo);
