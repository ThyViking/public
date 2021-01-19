# TarDrive
## Deploying on Heroku(Via Termux- Android)

### Install Termux
- [Termux](https://termux.com/)
(Termux is a terminal emulator and Linux environment app for Android. It also doesn't require you to root your device.)

- First Give Storage Permissions To Termux
```
termux-setup-storage
```
(After Using Above Command , Click On ```Allow``` When Pop-up Appears)

#### Download all Required Packages For this Repository
- To Install Python
```
pkg install python
```
- To Install NodeJs
```
pkg install nodejs
```
```
pkg install nodejs-lts
```
- To Install OpenSSL
```
pkg install openssl
```
- To Install OpenSSH
```
pkg install openssh
```
- To Install [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli) On Termux Android

First Install [NodeJs](https://github.com/com/TarDrive/README.md/19)
```
npm i -g heroku
```
- To Login In To Your Heroku Account
```
heroku login
```
### Steps Before Deploy Process
- Create A Telegram Bot By Telegram BotFather Bot [Direct Link To BotFather](https://t.me/BotFather)
- Set The Following Commands To Your Bot
(You Can Follow This [Click Here](https://github.com/arghyac35/aria-telegram-mirror-bot/README.md/15) If You Not Understand Below One Which were used By me

(Note : For me Only These Formatted Commands are accepted. So , I used them as below mentioned)
```
m - Mirror Your DL
mt - .tar Mirror Your DL
mf - Mirror TG Files
t - .tar G-Drive Folders
um - Extract Your DL
clone - Clone Your G-Drive Links
ms - Statuses Of Mirror
list - List Files In TD
gf - Hghjkk
cm - Cancel Your Process
ca - Cancel All Bot Processes
gl - Get Index Link Of File
disk - Stats Of Bot
count - Drive Url Info
```

### Deploy Process
- First Import/Clone or Fork Fork This Repository Into Your GitHub Account [Click Here To Know How](https://t.me/MortalViking) Or Directly Clone This Repository Into Termux By Following Command
```
git clone https://github.com/mr-U-I1/TarDrive
```
- In Termux after cloning repository
Type ```cd``` and Then Type ```ls``` To Check whether your repository clone is available in termux data storage
If Available Then Type ```cd TarDrive```
- - Now Login To Your Heroku Account To Know [Click Here](https://t.me/MortalViking)

- Create A New Heroku App:(From Here ```appname``` = your own appname)
```
heroku create appname	
```
- Use ```git init```
- Select This App In Your Heroku-Cli: 
```
heroku git:remote -a appname
```
- Change Dyno Stack To A Docker Container:
```
heroku stack:set container
```



- Restart Worker by these commands:
```
heroku ps:scale worker=0
```
```
heroku ps:scale worker=1
```	 
