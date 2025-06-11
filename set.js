const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61U246jRhD9lVW/2lpzt7E0UgADxnd8mbEd5aGBBtoGGtMNmFnN+35C3vKL+YQIeyY70ia7EylISE13U3VO1Tn1BWQEUzRFDRh+AXmBK8hQu2RNjsAQ6GUYogJ0QQAZBENw0Ts01tbncajMrF6Upcf6vA9VyFBoHEf+qYb+Wco9yxlLD+ClC/LSS7D/g4DByY7mjsMJj/mEW9KdOytPOsKZWaXGMTtGzO3Yx63q8Q19AC9tRIgLnEVmHqMUFTCZomYFcfEx+KapKkdUr2dTtlqg0CP6Il3NNLatE301s+r5Qhz0qMdbqfMx+OV0y11s+dFTCtcpF/ZUkyU4eSzHdegmuX2oG2s3IjM2is07fIqjDAVOgDKGWfPhug8cS8j3z9fjZuna6X6i4N5xwdz1Ze9STkKnIB6feNknh9T9GHDb5Pznp71exQ06WdPLpbcmsO/Hnuerx+TJHUlGNqnO9fpK3wNfFW9aOf+XuttmAuFgaqsuHC8oyonMyoPvELHyk818jc2BAZvDSs8z7YPwL0IJ6YxO1Y4Xa72xF7lOE4YTned7g12mnbOCMQ9VSeZ+gw9ZWfwIZaDY9drhlxc/hJGqplaNqFcuE+igfh56+vXg0YJexdJOD6PI2Q16O5eeSapNvU3zdEkSjVp4yT1tYeIx5k5JUigj7eHG6IwaJwBD/qULChRhygrIMMnaPVnpAhhUG+QXiN2qC8zxcraX6yO3GXM2mQm1p1Q2dLyjuJnJZOMIa21lxL7qiecH0AV5QXxEKQrGmDJSNHNEKYwQBcNfb41qORcoJQxNcACGQJBlRRZEdaDw0i/0cx1DRmGef84QA10QFiSdIzBkRYm64PaDImiyIZq6ZQoar1qKOeIkw1JNzlKsQV/SW4bpPekWp4gymOZgyPclVeFUnlNeuv8PDlPQZUXixL6k6wNV1yXF5A1eVzmxr3GGKv4Ux29dkKEru8u4Lb7Id0GIC8p2WZknBAZvGn87hL5Pyoxtmsw32gUqwPDdNmIMZxFtmZUZLPwYV8hoeYBhCBOK/u43KlDwxuV1hhkkaGW4Pey0leW6oMXeBvquNkNJ+b48ye0az8mCLHIDVRRFoS+3N9uDLshgGwwssE8SWNJPI5hhlHwSPv35x+9f3962Xq9M2sQBYhAnFAyBMRP2yeU8Mlfhjgwc29bcSDMiDXxj/maou2KDEx93dvNagf0BUlzx8Tmzd5Jxrqzn1dGcPqJIladWg4OIPPxDEDAESSGsm8W1nOeTGVl3lnHnWkgDX+CJOCOuWJbRjuclXwpq7rK0EHfuTAS0jElumvMcVxcIO9spUzTXi3K2SAPPmI9u7uuCAFXYR++T9WZbXonksXpcpsb4epknyim2NScUDDZ5epqgaDGZHhfC3FuYehraCVmfUKeShZ3Qu8iLc1WNj9R4XK7zueaNfIyX20qL7la/jZrkdcTjVxfi22eI0W1ivjbnpz2+A2+lyL1038V4ncH/Msf0/UE9hMlovkzL3rg8L3hfviZLLZ9d/WdhbSR7skKb2CfZYQpeWk/kCWQhKVIwBDALCnJTUEHKVttOFpIfJDO0yBm5d+YJpEz75pfvLcgNBvdbq4LkY0jjtggr/hCHrfgbLc83DLI3+wGtfSZ9Abz8BTLWgL+oCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ᴅᴜʟʟᴀʜ-xᴍᴅ v²",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255652398614",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                  ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                  ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
