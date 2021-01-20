module.exports = Object.freeze({
  TOKEN: '1567044180:AAEw8SZh0il-5hTQSfkfyk9y7FuvtorxPjw',
  ARIA_SECRET: 'viking',
  ARIA_DOWNLOAD_LOCATION: '/storage/emulated/0/Android/data/data/com.termux/files/home/TarDrive/downloads (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '0AKJcEFljhttvUk9PVA',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1484293805, 1401262087], // Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001187364301, -1001398883981, -1001201900862], // Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: true,
    EMAILS: ['rahul1112kapoor@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@Gdrive_tarbot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "https://mydrive.rahul112kapoor.workers.dev/3:/",
  TELEGRAPH_TOKEN: '355ae2d862ded29e02efe18f3a68fe193402ca2cad5dba9507a59518e4f3' // Telegraph token, if you want to show search results in telegra.ph else keep it blank
});
