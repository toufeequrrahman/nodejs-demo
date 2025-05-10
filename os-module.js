const os = require('node:os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
const uptime = os.uptime();
console.log(uptime);

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.type());
console.log(os.release());
