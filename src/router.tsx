import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./routes/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:category",
        element: <MainPage />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
