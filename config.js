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
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFGdlE0aXhTaHRyNDBvK3hJb2NxZVY3RnJtbFpFUXo2R3N1YUdLK0FWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieC92dUJRMDRzZTBYcVZBYzZWRXUxN3JKNzFGaU5qd2Y4MXlhd0ZkeDkzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRDJmUS9jbC9SdUFFYjVvc05TL0ZScHBIT1kveDdoRmNkVU9KQTJWcjM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFcVdZYWhUaU1ya09xZUdEVkpOSnFZTnkvcE81dktObGs5L3FkN3A2S1ZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQM0hxUVJKVFFjTWk4OEhqZXdCczhyVTd4Mkd5SjB1dDcvSkJrZ1B5M2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldSQkV5Z1NHdmVJcnRNLzI4ZUh1Rm1RNWpha0RPdmM5YkNEc3c0VGxreDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU03VUdOVVJwWXJUUWJZUVYvZHFYaFV4QkdhMEUwc3BqTGtGdklHQjBrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGFQckNJNmtZWUZqSElyY0M3QnRRQTZnWFBhMlFOdTY5WTAxcEhxVWRSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRkRHNrSkZ4aU9kVjhZY2hmT2ExcitQS1JyRWJiOU9IaHZhUnA3VzZMc2lRbk1lTGhqTk9MelphVFlscTZBVXBKZXViZ1RXRmhWUjhGM0RYNElsc0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiIzSFJ3OHhndGlUdjVaSTVaU0NKclovS0hDY2Ric09iY3pKVURaeUdhcnNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvQTdGVHRKa1JZeWVVQ0JJZUR3Uk5RIiwicGhvbmVJZCI6IjZmYzYyMDRiLTI5NjYtNDViYi1hZWNkLTVjNDkxMmNlYWEwNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMYzMrenRycjZRNTZraW5qeG40bTZES0lPYzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2UzbWxKanlMVjNVR0lyOTZTaVA5dTZTNm1zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdOSFdLR1dIIiwibWUiOnsiaWQiOiIzMzc1MTUwNDk4NzozM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2VZbTZJQkVMbWozcllHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNDlXVlI0V0tReHI5RkJvUkZUVE5xNjJHNThMR0hsWnVnRmxpK3doVDIwaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakYzcDB6OForYjlZVURUQlVFUW5jYnZJd2tvRjh3ZDU0UWh6cFJVdUEzVGVoUGNVeElEVlRSZVdCZFBValpsMStkNnNsNm5aK0srRTRJWHhmN1lvQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ing2SFRicWJVTlZpSnVld0UvbU0xRndHVFpNWjVESHBNeXkvTkd0Y1VHRHpzRmtKUDQ3Wm55aGFhV0hJb0JvVFhEeDR5V2tKOFhQTGJxR0hoWFFjNkNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzM3NTE1MDQ5ODc6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVBWbFVlRmlrTWEvUlFhRVJVMHphdXRodWZDeGg1V2JvQlpZdnNJVTl0SiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQwMzU5MH0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF VILLAGE DE KONOHA",
  author: process.env.PACK_AUTHER || "🌴༂࿔𝐾𝐴𝐾𝐴𝑆𝐻𝐼♚𝐵𝐸𝐿𝑍É𝐵𝑈𝑇𝐻𖤍 🌹",
  packname: process.env.PACK_NAME || "KAKASHI BELZÉBUTH-MD-V2",
  botname: process.env.BOT_NAME || "*🌴༂࿔𝐾𝐴𝐾𝐴𝑆𝐻𝐼♚𝐵𝐸𝐿𝑍É𝐵𝑈𝑇𝐻𖤍 🌹*",
  ownername: process.env.OWNER_NAME || "🌴༂࿔𝐾𝐴𝐾𝐴𝑆𝐻𝐼♚𝐵𝐸𝐿𝑍É𝐵𝑈𝑇𝐻𖤍 🌹",
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
