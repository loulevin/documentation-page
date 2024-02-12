# React Site

## Install

### Base React

- create a base site
  - `npm create vite@latest`
  - [Projectname]
  - choose React
  - choose TypeScript
- open Site on VSCode with
  - code [Projectname]
  - `npm i`
  - `npm run dev`
- you cann add in `package.json` to the `"dev": "vite --open"` command

### Tailwind Install

- open Terminal
- tipp `npm install -D tailwindcss postcss autoprefixer`
- tipp `npx tailwindcss init -p`
- config the `tailwind.config.js` with

```
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

- add this 3 rows in index.css/scss

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

- restart your site with `npm run dev`

### Sass install

- open Terminal
- tipp `npm i -D sass`
- rename the `index.css` into `index.scss`
- rename the import in `main.tsx`

### React Icons Install

- open the Terminal
- tipp `npm install react-icons --save`
- search the icon from the React-icons and tipp
  `import { FavIcon } from "react-icon/fa"`

### JSON-server Install

- create a `db.json`
- the write `src/data/db.json`
- write
  ```
  {
      "database": []
  }
  ```
- tipp `npm i -D json-server` in the terminal
- tipp `npm i -D npm-run-all`
- change in `package.json`
  ```
  "dev": "run-p api frontend",
  "api": "json-server --watch ./src/data/db.json --port 4801",
  "frontend": "vite --port 4800 --open",
  ```
- restart your application with `npm run dev`

- test the backend
- create a test.rest file
- add this information

```
@url = http://localhost:3820

### GET ALL BUFDGET
{{url}}/bugetbook

### ADD AN BUDGET
POST {{url}}/bugetbook
content-type: application/json

{
    "bookingnr": "1",
    "date": "01-01-2020",
    "category": "Lebensmittel",
    "business": "Rewe",
    "amount": "100",
    "notes": "Einkauf für die Woche"
}

```

### Install React Router (createBrowserRouter)

- type `npm i react-router-dom`
- make pages

  - src/pages/PageFirstSite.tsx/jsx

    ```
    export const PageFirstSite = () => {
      return (
        <p>This is the First Site</p>
      )
    }

    ```

- repeat
- create AppRouter.tsx
- type

  ```
  import { createBrowserRouter } from "react-router-dom";
  import App from "./App"
  import { PageFirstSite } from "./pages/PageFirstSite";
  import { PageSecondSite } from "./pages/PageSecondSite";

  const router = createBrowserRouter([
      {
          path: "/",
          element: <App />,
          children: [
              {
                  path: "/",
                  element: <PageFirstSite />
              },
              {
                  path: "/second",
                  element: <PageSecondSite />
              },
          ]
      }
  ]);

  export default router;
  ```

- create the navigation
- src/components/Nav.tsx

  ```
  import { NavLink } from "react-router-dom";

  export const Nav = () => {
    return (
      <nav>
        <ul>
          <NavLink to="/firstsite">FirstSite</NavLink>
          <NavLink to="/secondsite">SecondSite</NavLink>
        </ul>
      </nav>
    );
  };

  ```

- create the Header Section

  ```
  import { Nav } from "./Nav"

  export const Header = () => {
    return (
      <>
        <h1>Info Site</h1>
        <Nav />
      </>
    )
  }
  ```

- import the Header Section in `App.tsx`

  ```
  import { Outlet } from "react-router-dom";
  import { Header } from "./components/Header";

  function App() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  export default App;
  ```

- change in `main.tsx`
  ```
    ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
    );
  ```
- import all missing imports

## Github upload

- `git init -b dev`

## Minimalize the Site

- delete `assets` folder
- delete `App.css`
- clear the `App.tsx`

```
function App() {
    return (
        <>
            <h1>[Projectname]</h1>
            <p>Text testing</p>
        </>
    );
}

export default App;
```

- empty content in `ìndex.css`
- delete in `main.tsx` the `<React.StrictMode>`
- change the title in `index.html`

elisabeth 51232

## Tailwind your build Theme

### Colorsheet

- open `tailwind.config.js`
- write in theme your colors
  ```
   theme: {
    extend: {},
  },
  ```
  ```
   theme: {
    extend: {
      colors: {
        "color-bg-light": "#fff",
        "color-bg-dark":
      }
    },
  },
  ```

### Shadcn/ui

- when you install Tailwind than you can start with Shadcn/ui
- open the `tsconfig.json` file
- add in `"compilerOptions":`
  ```
  "baseUrl": ".",
  "paths": {
    "@/*": [
      "./src/*"
    ]
  }
  ```
- install with `npm i -D @types/node`
- go to the `vite.config.ts`
- add in this file
  ```
  resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
    },
  },
  ```
  and import
  ```
  import path from 'path'
  ```

##### know you can start the CLI
- `npx shadcn-ui@latest init`

√ Would you like to use TypeScript (recommended)? ... no / <ins>yes</ins>
√ Which style would you like to use? » <ins>Default</ins>
√ Which color would you like to use as base color? » <ins>Slate</ins>
√ Where is your global CSS file? ... src/index.scss
√ Would you like to use CSS variables for colors? ... no / <ins>yes</ins>
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / <ins>yes</ins>
√ Write configuration to components.json. Proceed? ... yes
