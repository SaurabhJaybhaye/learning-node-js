// os.js
const os = require("os");

function osMain() {
  return `🖥️ System Information: 
    \n ----------------------
    \n OS Type: ${os.type()}
    \n Platform: ${os.platform()}
    \n Architecture: ${os.arch()}
    \n Hostname: ${os.hostname()}
    \n User: ${os.userInfo().username}
    \n Home Directory: ${os.homedir()}
    \n CPU Cores: ${os.cpus().length}
    \n Total Memory (GB): ${(os.totalmem() / 1024 ** 3).toFixed(2)}
    \n Free Memory (GB): ${(os.freemem() / 1024 ** 3).toFixed(2)}
    \n Uptime (Hours): ${(os.uptime() / 3600).toFixed(2)}
    \n ----------------------`;
}

exports.module = {
  osMain,
};
