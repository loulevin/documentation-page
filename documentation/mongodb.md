# Backend

## MongoDB

- create a backend folder
- type `npm init -y`

### Install

- install `npm i express mongoose nodemon dotenv cors`
- create in folder the file `server.js`
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
`"server": "nodemon index.js"`

### Backendfolderroute
> src
    >  api
        > controllers
        > routers
        > schemas
        > utils
    index.js


### index.ts and .env
- create `src/api/index.js` 
- write in `index.js`
```
import express from 'express';
const app = express();
const port = [Portnumber]

app.listen(port, console.log(`server is running on ${port}`))
```
- update in `package.json` the path in `src/api/index.js` 
- run the server 
- than it works, create a `.env`
- write in the file
```
DB_URL = mongodb://localhost:27017/[projectname]
```
- add than in your `index.ts`
```
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URL;

const backendDb = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.log(e);
  }
};

backendDb().then(app.listen(port, console.log(`server is running on ${port}`)));

```

### Schema
- **create the schema first**
- create in the schema folder [collectionname]Schema.js 
```
import mongoose from "mongoose"

export const [collectionname]Schema = new mongoose.Schema(
    {
        
    }
)
export const [Collectionname] = mongoose.model('[Collectionname]', [collectionname]Schema)

```

### Controller
```
Controller:
The term "Controller" is often used in web frameworks like Express.js (for Node.js) or in MVC (Model-View-Controller) architectures. A controller is a component responsible for handling requests, retrieving data from the database, and passing it to the view. It usually acts as a mediator between the model (database) and the view (user interface).
```
`The controllor is the second step`
- create `src/api/controllers/[collectionname]Controller.js`
- 

`for every Schema you need a controller`


get - 