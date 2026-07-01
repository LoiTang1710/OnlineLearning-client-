import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Login, Register } from "./modules/auth/index.tsx";
import { Home } from "./modules/home/index.tsx";
import { Providers } from "./providers/Providers.tsx";
import { Toaster } from "sonner";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/AppSidebar.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";


const GlobalLayout = () => {
  return (
    <Providers>
      <Toaster />
      <Outlet />
    </Providers>
  );
};

const MainLayout = () => {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />
        {/* Bao bọc Outlet bằng main để dễ quản lý flex/width với sidebar */}
        <main className="flex-1 w-full relative">
          <SidebarTrigger className="absolute top-4 left-4" />
          <Outlet />
        </main>
      </TooltipProvider>
    </SidebarProvider>
  );
};

const AuthLayout = () => {
  return (
    <main className="flex min-h-screen items-center justify-center w-full">
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <GlobalLayout />, 
    children: [
      {
        path: "/",
        element: <MainLayout />, // Giao diện chính có Sidebar
        children: [
          {
            index: true, // Dùng index: true thay vì path: "/" cho trang mặc định
            element: <Home />,
          },
        
        ],
      },
      {
        element: <AuthLayout />, // Giao diện Auth không path (layout group)
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
