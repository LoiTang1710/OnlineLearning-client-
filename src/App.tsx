import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Login, Register } from "./modules/auth/index.tsx";
import { Home } from "./modules/home/index.tsx";
import { Providers } from "./providers/Providers.tsx";
import { Toaster } from "sonner";

const RootLayout = () => {
  return (
    <Providers>
      <Toaster/>
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
