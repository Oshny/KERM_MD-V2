//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KAKASHI BELZÉBUTH-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5ea9dbe8d194abf45ca7d.jpg";
global.devs = "https://wa.me/33751504987 , https://wa.me/33751504987";
global.sudo = process.env.SUDO || "33751504987";
global.owner = process.env.OWNER_NUMBER || "33751504987";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg,https://telegra.ph/file/9deb04066bb23928364eb.jpg,https://telegra.ph/file/a883ea1d150f9db4033ac.jpg,https://telegra.ph/file/a449aee68cc980769cf24.jpg,https://telegra.ph/file/0ed72840be5821352f6e1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5tcC9KOUJMWE5BT3lEcy8yUW1NalBieUJhOHVKblNCK3lEa25RVDNWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTh5Z3RZZUNpZ3c5dmY0eUNOaTBnSHVTbEtGd25tYkJ3akw5YWx5bzBrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRlpZTlVKZkVsV1k5OWhQcUR4M3YzdUlxZHpsWi9IQXIwRmg0RElYLzFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtcG1BTHg2WVVwV1Nvd0I0NnczeDN6dXpzWDM0UVV2KzN1bjgwUHJ3N2g4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDN1V2OFNhU1FBOWh2ZXFsQXRvcWlWdk5vcDlnMmpYcUtLY3J1NU9Ia1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRRWkdJYnVtYUpuSlNOaCtOMnZwbzFhbDM2TEhCZkhKNm9CUWFWK0ZVMWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtSNlI4T0ppY1BZbW9PUHBhbmJqenBINThZVkVJK2Vua0c0TkEvWHlYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmZ3aGp2ZkFXNnRXRVQvakRpMEZ3Qlk0NVNKTms4ZDZKUGlOSXkrK0ZGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9VNmZhbXZxWmNPQjk2NGMyUE9uVldLVHg3ZmZSR016bjdZV2J0NFVrblllVkpTb2V6ck1TK2phL3dnWFpONnpCSUNMamJLbjFMOFlJTnZ5ZXo1SUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJSSlJCeDRiQ2o2c0t6WDVjbWJETHJRZ25YbUlOY2hhalVOeVRFUnBteUNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfVUd1WkZDUlFwNndpNFdrNFc1Vkx3IiwicGhvbmVJZCI6ImMyZDM5NDhkLWFmMjktNDg3OC05NTU2LTJlMDUzYjhhZThiMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwNm5NREtZbmN2bHU1WVVnYktzOGJHeWhkeFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N2VnJJbjF1REthZmY0Y2s1bmZidERmODEwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZaM0U5TUpZIiwibWUiOnsiaWQiOiIzMzc1MTUwNDk4NzozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2lldkpNRkVMK25wN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSXdjZGozSklDdTdNY1hOTmhvYWRHVjBvUEgxK2YwbHlGdytHSHpheFBrbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibHc1ZTIyQkUveEJBWUVMODRkdVMvOFNPNDFsemdpcUxRb2xaMk9LYVp0MjhLaHZIbmVvSWxCSVFBR1lqL2JuRlc0bzZYNmRVRWF5NmtvUjRVdytQQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImpSMEhaZmM5RWJ4Y09VU0h0ditncUt5THJIMVhRSisxZC8wRU9oREpleUR1NUtwMGJyYWdyM3hOSWdyaHc2WGdlRTd4cW5BdVFhaEdtS0VlcUN0TkRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzM3NTE1MDQ5ODc6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU01ISFk5eVNBcnV6SEZ6VFlhR25SbGRLRHg5Zm45SmNoY1BoaDgyc1Q1SyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjYwMDE0MX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ✞༃➳🌹𝑡ℎ𝑒 𝑐𝑜𝑝𝑦 𝑛𝑖𝑛𝑗𝑎 🌹➳༊✞Rsm🥷🏽-MD",
  author: process.env.PACK_AUTHER || "𓄂⍣⃝𓍝𝐾𝐴𝐾𝐴𝑆𝐻𝐼☠𝐇𝐄𝐍𝐃𝐄𝐑𝐒𝐎𝐍࿋ོ𓅂",
  packname: process.env.PACK_NAME || "𓄂⍣⃝𓍝𝐾𝐴𝐾𝐴𝑆𝐻𝐼☠𝐇𝐄𝐍𝐃𝐄𝐑𝐒𝐎𝐍࿋ོ𓅂-MD-V2",
  botname: process.env.BOT_NAME || "*✞༃➳🌹𝑡ℎ𝑒 𝑐𝑜𝑝𝑦 𝑛𝑖𝑛𝑗𝑎 🌹➳༊✞Rsm🥷🏽-MD-V2*",
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𓍝𝐾𝐴𝐾𝐴𝑆𝐻𝐼☠𝐇𝐄𝐍𝐃𝐄𝐑𝐒𝐎𝐍࿋ོ𓅂",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
