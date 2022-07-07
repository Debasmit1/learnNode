const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method return the system uptime in sec

console.log(`The system uptime is ${os.uptime() / (3600 * 24)} days`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  aim: "VMWare",
};

console.log(currentOS);
