import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import Watchlist from "./components/Watchlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/watchlist", element: <Watchlist /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
