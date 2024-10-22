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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUt0di9pTTk0Ym0zUzllOFhadyszcEl5d1ZsQ3E3aGtRMmVtendxeCtVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWZpcFRYMy9ZVWxiZGtUcUpQc1VrdkFqYk55MUlSM2pyQmxpaUFWSWhWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPT21rRG9OSE00Z0ZCV2VrVlVwZ2FHVVNKWjJacXd6N3FOMENGSmkybVZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3YkdNc1BTNlBVMjBLaFY1ek5ZY1lIeTZnbUphQ3pLYThoWmd6dXFEMm5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJSGpXMHE3ZEgwK3kvbi9qNU9SaUJjdUtVbDNSRGJMc1Biam5memFNbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild2Z2lUdU5vWVVHTE41Qm9lV051MS9nRXVieEZCdlJvVFlqQkNRSWF0Qm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtqSjJhU3dtb3JCVWZ2TVlMaExwOHVIWjZhV3dtVlZOdDcxL01QMjVIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDhpeHFneUErUFNodG8vR3F6ZVFTYldVUHgvNGJiK2src1Q5VTBJNGJpND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik15cktmTmNlQXB0ZUJPUjFManNxbkYvV3NuSDZ2TStnUU5KakdzQXlLSklnNEtZOWFCbXNUbzZXaEZUUnJFeXl0Z0NBUzBEb2tjVExkQy9zbVQ2SkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJHOTNyQ1Y2VzhKRTFEbHhCOHpzQnllY0dVc3M0bnJmMSttQXY5QW9iNTRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0NlpGQmFhdlRlLTFrU2sxOXgtd3VBIiwicGhvbmVJZCI6ImY3ZjRhNDRhLTg2NTAtNDU4My1iZGEyLWFjZGMzY2I3ODFiOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyN2RnNDlHZXMvVVNnUkt2MDV6emVWRVJiTms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS25zOHhOQ3dhQ3J2cHVDWkduVTB6dE9oL0RFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdCV01ETTlYIiwibWUiOnsiaWQiOiIzMzc1MTUwNDk4Nzo0MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkd0b2Z3RkVOK0wzN2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZTFxcTNsd2I4NDg1cTF0ZE0wL3ZMUjAxS2ZhNGlicjRqUW9CTU9SZG0wRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV1RzTHBWd1c2cU9tT29aVWdMSXQ2eUtVWjNBeWNGS3FwYVNxSm9RQ2RGVXIyY3pmRzdhVGRKV2F6dXUvZ1lFVFBhMmRUR0dnUVlsdUM2SDFEeVVkRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImtjSVFTeG5YTGx1YUpvc2ZsUEZkN1VCcnVmeDR6aHpFdlpXUGhIMEx3ZHRTb3R2UzJYOEltZXBmWHcxc0JLalRIR3Jic213MGdXWEhYMHNUdlB1R0JnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzM3NTE1MDQ5ODc6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHRhcXQ1Y0cvT1BPYXRiWFROUDd5MGROU24ydUltNitJMEtBVERrWFp0QiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTYxMTI0NX0="
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
