# Backend

## MongoDB

- create a backend folder
- type `npm init -y`

### Install

- install `npm i express mongoose nodemon dotenv cors`
- create in folder the file `main.js` or `server.js`
- create the `.gitignore` and write
```
node_modules
.env
.dist 
.vscode
```

- type in `package.json`
```
"type": "module"
```
and change in the `"scripts":` the `"test":` row in 
`"server": "nodemon main.js"`

- create `main.js`, `controller.js` and `router.js`
- write in `main.js`
```
import express from 'express';
const app = express();
const port = [Portnumber]

app.listen(port, console.log(`server is running on ${port}`))
```
- run the server