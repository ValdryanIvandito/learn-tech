Cek versi NPM:
npm -v

Setup npm local:
npm init

Setup npm local quick mode:
npm init -y
then appeared package.json

How to create executeable node shortcut:
open file package.json
create "start" like example below:
"scripts": {
    "start": "node app.js",
    "dev": "ls",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, 
Then execute at terminal => npm start

How to create some command:
open file package.json
create "dev" and define the command (ex: ls) like example below:
"scripts": {
    "start": "node app.js",
    "dev": "ls",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  Then execute at terminal => npm run dev

How to install other npm package (dependencies):
example: validator package
go to documentation: https://www.npmjs.com/package/validator
npm i validator
to install spesific version => npm i validator@13.5.2
check package.json, then appreared: 
"dependencies": {
    "validator": "^13.5.2"
  }
and also package-lock.json

How to uninstall other npm package (dependencies):
npm uninstall validator
or npm uninstall validator@13.5.2

How to install nodemon globally:
npm install -g nodemon 
or using yarn: yarn global add nodemon

How to install nodemon locally:
npm install --save-dev nodemon 
or using yarn: yarn add nodemon -D