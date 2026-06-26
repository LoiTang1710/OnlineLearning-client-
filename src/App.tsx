import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Login, Register } from "./modules/auth/index.tsx";
import { Home } from "./modules/home/index.tsx";
import { Providers } from "./providers/Providers.tsx";

const RootLayout = () => {
  return (
    <Providers>
      <Outlet/>
    </Providers>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;
