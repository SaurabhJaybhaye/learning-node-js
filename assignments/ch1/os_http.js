// os and http.js
const os = require("os");
const http = require("http");

function getSystemInfo() {
  return `🖥️  System Information:
    \n ----------------------
    \n os Type: ${os.type()}
    \n os Platform: ${os.platform()}
    \n os Architecture: ${os.arch()}
    \n Total Memory: ${os.totalmem() / 1024 ** 3} GB
    \n Free Memory: ${os.freemem() / 1024 ** 3} GB
    \n Uptime: ${os.uptime() / 3600} Hours
    \n Hostname: ${os.hostname()}
    \n ----------------------`;
}

console.log(getSystemInfo());
