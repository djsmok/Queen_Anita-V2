//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURpb3FiTDJQMXRTNVZZOFByaVBGcGU3SWNsNU8vemlMUUxONm1SaWFsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZCtaa0p5ampBWUV1TGxIVHRtZnZLdGFLeVVDMUNiOWsyZUEzcE4zTFZGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRVh1SWNISkFMQzNaV2sxWTNDczFabjNxM3Zpd2JwSTVZTnlDV3k3cmwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOUtZTkRUQmk5ZHc5UHY0Nkl2eHc5a3JWSHpFT1I5SW5Ya1V5TEtNYm1ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDSXBvR3dFTVZ4NVhYUURWa3ZaSmlCbVh1dEpESE9TWTQ4bUx2UWdIRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFbVBqWnhSaEVTQW16Njc4dGVWWDNjYWMvalJ5Z0h0TndndXZJVDVlQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pQeUZxbjZ3YlM5c0RNMEFGaFltbUNDcktBYkxDejZEc3NQNTFuNTRIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVlzVEtXQ1Zabm9tMGx1L2V3RlZ3eGJVbHJhNy93SzBRako1NitFMFdUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlXMXIxZ29oN0hLd3JZTTVPL3EzOHdZM2dxRVRGSU4xNWZpTW45VG4xMGFvWm9pTzdxajJkVnZpUlJ4T0Q4dGRJenhaM3BxSEswRVUraVRMdnNObmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6ImxqNTlJUCthVXdmdWh6RlEyQkU4Tk0vaEM1YTE2VEd3UlR0eTM4QmUvRm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBEWkx6eXllUVYtU0xIY1ZGV0RtUmciLCJwaG9uZUlkIjoiZWY1YmUyYmYtMzk5OC00ZjU0LTk4YWQtMjZhOTQ4OWI5MTZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIzMVRTN0JaRTQ5YUpqUkJ3S2hlQlpKQ2dKbz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk45emlKbkM4blVDUE1DcjdZTk5QcnFEWXNrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmo2Z0s0Q0VKdnJ5clVHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUjFjOTl1eHY3aU1yaTJzSitPc01FN280VmNSSEpQR0I2TWtHbWw0WnkyWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZlhWVXhJNGRYb2x1MWVhV1pLNVJlMEhmMGxaNDNQTXVEU1V3UkpCSnBiUGpSMHV5YjZnbnBCOEFmRlZURTB5c0k4RzJZTW81N2dEZFFsWUhnNFRkRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVKKzlDc1lRdC92WFFWL0hnbEhYMW5VMkhQM0UzdEo3Zm9YY25jZWR1U0FhTUJwU2UxNjNzc0RVeWoveW9VeUdmWkxZdldZRkxRaHJMWGNVZUZnbmp3PT0ifSwibWUiOnsiaWQiOiIyMzM1MzEyNDU5MjU6NjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi76O/IPCdkpTwnZKO8J2SkPCdkozwnZKGIPCdkoLwnZKF8J2SlCDvo78iLCJsaWQiOiIxNjkxNDA1OTM2NTE5MDE6NjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzMTI0NTkyNTo2M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVZFhQZmJzYis0aks0dHJDZmpyREJPNk9GWEVSeVR4Z2VqSkJwcGVHY3RtIn19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI5ODc5NDMsImxhc3RQcm9wSGFzaCI6IjF2NEE2YyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVliIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
