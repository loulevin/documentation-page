# Crud

https://tanguay-eu.vercel.app/howtos/804

## Change the template

- when you use a template, than you change in `package.json`
  - the [projectname]
  - and the portnumber in the dev `vite --port [portnumber] --open`
    [Screenshot]
- in`index.html` change the title
- in `header.tsx`

## Install the backend

- create `backend/api/index.ts`

  - wrote for a example

  ```
  const showMessage = (text: string) => {
  console.log(text);
  }

  showMessage('typescript backend works');
  ```

  [Screenshot]

- add a new terminal and wrote `node backend/api/index.tsx`
  - that does not work, because Node cannot execute TypeScript
- install `npm i -D tsx`
- the type in terminal `tsx backend/api/index.ts` dont work
- `npx tsx backend/api/index.ts` works.
- create a npm script for the backend in `package.json`
  - `"api": "tsx backend/api/index.tsx"`
- starts the website with `npm run dev` new

- install ` npm i -D concurrently`
- change and add in `package.json` this scripts
  ```
  "dev": "conc \"npm run api\" \"npm run frontend\"",
  "api": "tsx backend/api/index.ts",
  "frontend": "vite --port [portnumber] --open",
  ```
- they starts te backend and the frontend
- for live-server install nodemon
  - `npm i -D nodemon`
  - change in `package.json` than
    ```
    "api": "nodemon", 
    
    "nodemonConfig": {
    "watch": [
    "backend"
    ],
    "ext": "ts, json",
    "exec": "tsx backend/api/index.ts"
    },
    ```

## API install

- install express with `npm i -D express`
- for types in express `npm i -D @types/express`
- change in `index.ts`
    ```
    import express from "express";

    const app = express();

    app.get('/', (req, res) => {
        res.json({
            appName: "API for AppLearn version 0.1"
        })
    })
    ```
- create `backend/api/config.ts`
- write 
    ```
    export const getPort = () => {
    return [portNumber]
    }
    ```
- crate `backend/api/server.ts`  
- copy this rows in `index.ts` 
    ```
    import express from "express";

    export const app = express();

    app.get("/", (req, res) => {
      res.json({
        appName: "API for AppLearn version 0.1",
      });
    });
    ```
- export this rows in `server.ts`

- change in `index.ts`
    ```
    import * as config from "./config";
    import { app } from './server'

    app.listen(config.getPort(), () => {
      console.log(`http://localhost:${config.getPort()}`);
    });

    ```
    
## CRUD Config

C - Create
R - Read
U - Update
D - Delete

- create `backend/routers/[project related]Router.ts`
- write in `[project related]Router.ts`
    ```
    import { Router } from 'express'

    export const [projectname]Router = Router()

    [projectname]Router.get('/', (_req, res) => {
        res.json('get all [projectname]')
    })
    ```
- add this row in `server.ts`
    ```
    import { [projectname]Router } from "../routers/[projectname]Router";
    
    app.use('/api/[projectname]', [projectname]Router)
    ```

## EXKURS: POSTMAN
- go to `Postman`
- go to the `+`
- click `create new collection`
- create than a new `Blank collection` 
- rename the `new Collection` in your `[Projectname]`
- add a new Folder and named than your [project related]
- add a new request
- change the name 
- `GET` 
- `http://localhost:[portnummer]/api/`
- SEND
- repeat the steps  for `POST`, `PUT`, `PATCH`, and `DEL`

## Instal lowdb
- install with `npm i -D lowdb`
- create a new file with `backend/interfaces.ts`
- write in
    ```
    export interface I[projectname or project related] {
        what you need for this project

        an example from flashcard
        suuid: string;
        front: string;
        back: string;
    }
    ```
- create a new file with `api/handlers/[projectname]Handlers.ts`
- write in 
    ```
    import { join } from 'path';
    import { JSONFile } from 'lowdb/node'
    import { Low } from 'lowdb'
    import { IDatabase } from '../../interface';

    const projectBasePath = process.cwd();
    const dbPathAndFileName = join(projectBasePath, 'backend/data/db.json')
    const adapter = new JSONFile<IDatabase>(dbPathAndFileName);
    const db: Low<IDatabase> = new Low<IDatabase>(adapter, {} as IDatabase)
    await db.read();
    ```
    
