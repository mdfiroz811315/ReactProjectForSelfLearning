import {  createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Dashboard from "../Dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "", element: <Home /> },
     
    ]
  }
]);

export default router;