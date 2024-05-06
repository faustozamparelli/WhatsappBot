// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');
//
// const client = new Client({
//   webVersionCache: {
//     type: "remote",
//     remotePath:
//       "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
//   },
// });
//
// client.on('qr', qr => {
//     qrcode.generate(qr, {small: true});
// });
//
// client.on('ready', () => {
//     console.log('Client is ready!');
//
// client.initialize();

const hour = new Date().getHours();
const min = new Date().getMinutes();

console.log(hour + ":" + min)
console.log(random)




