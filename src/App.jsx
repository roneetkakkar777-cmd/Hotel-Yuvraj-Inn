import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/Rootlayout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Amenities from "./pages/Amenities";
import Location from "./pages/Location";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Policies from "./pages/Policies";
import Nearby from "./pages/Nearby";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "rooms", element: <Rooms /> },
      { path: "gallery", element: <Gallery /> },
      { path: "amenities", element: <Amenities /> },
      { path: "location", element: <Location /> },
      { path: "offers", element: <Offers /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "policies", element: <Policies /> },
      { path: "nearby", element: <Nearby /> },
    ],
  },
]);



function App() {
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
