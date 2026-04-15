import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

const Layout = () => (
  <div className="bg-[#FAFBFC] min-h-screen">
    <Navbar />
    <main><Outlet /></main>
    <Toaster position="top-right" />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      {path:"about",element:<About/>},
      {path:"services",element:<Services/>},
      { path: "services/:id", element: <ServiceDetail /> }
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