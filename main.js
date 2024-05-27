"use strict";
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const Groq = require("groq-sdk");

const client = new Client({
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();

const contacts = {
  mamma: "393476522538@c.us",
  papa: "393488573651@c.us",
  helena: "393770999735@c.us",
};

const contactName = process.argv[2];
const contactId = contacts[contactName];

if (!contactId) {
  console.error("Unknown contact name:", contactName);
  process.exit(1);
}

async function getGroqChatCompletion(messages) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are texting to one of my contacts and you will respond as if you were me. The messages will be in italian and i usually don't use capital letters or punctuations except periods",
      },
      ...messages.map((message) => ({
        role: "user",
        content: message,
      })),
    ],
    model: "llama3-70b-8192",
  });
}

client.on("message_create", async (message) => {
  if (message.from === contactId) {
    const chatCompletion = await getGroqChatCompletion([message.body]);
    const responses =
      chatCompletion.choices[0]?.message?.content.split(". ") || [];
    for (const response of responses) {
      // const delay = Math.random() * (20 * 60 - 2) + 2; // delay between 2 seconds and 20 minutes
      // await new Promise((resolve) => setTimeout(resolve, delay * 1000));
      message.reply(response);
    }
  }
});
