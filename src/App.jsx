import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/vite-react-deploy-local/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/vite-react-deploy-local/",
        element: <Home />
      },
      {
        path: "/vite-react-deploy-local/detail",
        element: <Detail />
      }
    ]
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
