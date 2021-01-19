# TarDrive
## Deploying on Heroku(Via Termux- Android)

### Install Termux
-[Termux](https://termux.com/)
(Termux is a terminal emulator and Linux environment app for Android. It also doesn't require you to root your device.)

#### Download all Required Packages For this Repository
- First Give Storage Permissions To Termux (After Using Below Command , Click On 'Allow' When Pop-up Appears)
```
termux-setup-storage
```
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


- Install [Heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
- Login into your heroku account with command:
```
heroku login
```
- Create a new heroku app:
```
heroku create appname	
```
- Select This App in your Heroku-cli: 
```
heroku git:remote -a appname
```
- Change Dyno Stack to a Docker Container:
```
heroku stack:set container
```
- Add Private Credentials and Config Stuff:
```
git add -f credentials.json token.pickle config.env heroku.yml drive_folder
```
- Commit new changes:
```
git commit -m "Added Creds."
```
- Push Code to Heroku:
```
git push heroku master --force
```
- Restart Worker by these commands:
```
heroku ps:scale worker=0
```
```
heroku ps:scale worker=1	 
