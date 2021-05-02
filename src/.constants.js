module.exports = Object.freeze({
  TOKEN: 'bot_token',
  ARIA_SECRET: 'viking',
  ARIA_DOWNLOAD_LOCATION: '/storage/emulated/0/Android/data/data/com.termux/files/home/TarDriveBot/downloads (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1tPGmz4eHXLEWYczECi6G9RbQATzY_C9n',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1597196024, 1095264362],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001451622377, -1001321363429],	// Telegram chat IDs. Anyone in these chats can use the bot.
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
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "https://td.thyviking.workers.dev/0:/TarDriveBot/",
  TELEGRAPH_TOKEN: 'ee2862d6df4637cabfee0134b03f9bc3dabfdec08444e169e8e25c5d1dbf', // Telegraph token, if you want to show search results in telegra.ph else keep it blank,
});
