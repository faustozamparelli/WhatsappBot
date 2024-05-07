const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");

const client = new Client({
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

client.on("message_create", (message) => {
  if (
    message.from === "393801426695@c.us" &&
    message.body.toLowerCase().startsWith("buongiorno")
  ) {
    fs.readFile("./morning_response.csv", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const responses = data.split("\n");

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      //
      // const delay = Math.floor(Math.random() * 50 * 60 * 1000);
      //
      // setTimeout(() => {
      //   client.sendMessage(message.from, randomResponse);
      // }, delay);
      client.sendMessage(message.from, randomResponse);
    });
  }
});
