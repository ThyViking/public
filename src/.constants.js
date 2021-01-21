module.exports = Object.freeze({
  TOKEN: '1320659926:AAHiPYMLx1TCysrYZAB_fUXMnuGjRfcBXmc',
  ARIA_SECRET: 'viking',
  ARIA_DOWNLOAD_LOCATION: '/storage/emulated/0/Android/data/data/com.termux/files/home/TarDrive2/downloads (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '0AM_13IiFDgFsUk9PVA',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [779328316, 1095264362], // Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001128349376, -1001321363429], // Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['mrnu.2003.1@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@TarGDrive1Bot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: true,
  INDEX_DOMAIN: "http://thyviking.cf/0:/",
  TELEGRAPH_TOKEN: 'b603c7f9f621ca3a96be4ee710e9578d08963059f37336555ed39562336b' // Telegraph token, if you want to show search results in telegra.ph else keep it blank
});
