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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVxZGd2NFNzSDFCQXdzWVByQWd5THUzdG43d0xxb1M1RGg5ekNTMituST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVYvcjNVa3FuK1VVNi9OSlJuN3lpOFl2SnVPRng0bnZIZ012c2wxSUFBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSzJWMjdKSklHRzRSUS9CVlFuRjZ1amtFNk9rbVl6OUtYWjRRb2gxUVZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxYWEvbjQyTExKajZycS9CZmRSSHpXMmJKdTIwL0xHS3ZjWHhuNG83WjBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBVC9BT2pWVU12VGduUmVWSitmZ2MvQXdpWW9xQzZLTUVOSjhXVFRrMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVuTmIrUUlyOGdlQ1hCa2xUR1Z2V2dkM2IwZkZ3cDVtV3o5RnZMNStDaG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1B1NnJBNDV2MnZKbCt2UXduU0tkUEYzN2kvT3FRSDNLL0NHS0VtTklWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRC8rTVhIYXRVWml4aVBCN1JzQnpXdkJBRkdYcUxIdDZFSmNEYmpsTmhDcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM1VFArQXlZbzAyd2lFNkpxZGJGOEtxY1A0eldta3lqZFJkVXNqWkN0THh2cy9yeFpxWHQ3cEJmcmtTcG8rZ21QbWFsN3NFMWoyVXV6bTM0Nlljc2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6IklnOHBiV0pMbjZXZVFpT2xNSm5RYnZYZ3V4TkJZODRmZUVlcmdpclMzTGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktyaERrMDJ0UXRHcGJGSDVtY0I2WWciLCJwaG9uZUlkIjoiZjc0ZTIxZjctODY1YS00NDAxLTgxMTYtNmEyNTlkMjViOTkyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFkZFJPd3dISjN4NGwvRkxxQ2xkM1kxTCtkQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RVVkdjgzajVuM2NxOHNxYUpVMFRiQXc3Slk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVZRSFg1RjkiLCJtZSI6eyJpZCI6IjMzNzUxNTA0OTg3OjM5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOQ2tuNXdERU1ENm9MZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNMmViYXlQdWxEbGlJV0RtWjdDKzFnQmxaSGZmZjdhYWxDbjN6SUNudGlnPSIsImFjY291bnRTaWduYXR1cmUiOiJzcVUvKzUyUXpvenVQb1JsU1hzNTdhUTFYYkZiOUR1MUFucXovbGhyUHZhY2VsUlQvRTJUWi9zNURQYUlYVVJoZUNSQjEwRCtYZ0xxdWZCY0t2dFVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidDRpaXpSakovV2ZUSENTcUlVd3NIb1p0akRiZmt3bXVlbkNoWjRLRTFOYjg2MjVFZGc1WnpabXRmai9lZXBZOFo4ZUpQNnBoY3NsUnRrRGJzMkZ5aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzMzc1MTUwNDk4NzozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUTm5tMnNqN3BRNVlpRmc1bWV3dnRZQVpXUjMzMysybXBRcDk4eUFwN1lvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTkzMjI5fQ=="
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
