import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageHome } from "./pages/PageHome";
import { PageViteIntstall } from "./pages/PageViteInstall";
import { Page404 } from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Page404 />,
    element: <App />,
    children: [
      { path: "/", element: <PageHome /> },
      { path: "/install", element: <PageViteIntstall /> },
    ],
  },
]);

export default router;
