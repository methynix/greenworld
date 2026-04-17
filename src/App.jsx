import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const RootLayout = () => {
  return (
    <div className="bg-gw-base min-h-screen selection:bg-gw-leaf selection:text-white">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Toaster 
        position="bottom-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#1B3C35',
            color: '#fff',
            borderRadius: '20px',
            padding: '16px 24px',
          },
        }}
      />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>, 
      },
      {
        path: "contact",
        element: <Contact />,
      },
    {
        path: "services",
        element: <Services />, 
      },
      {
        path: "services/:id",
        element: <ServiceDetail />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}