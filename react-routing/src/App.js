import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";

import Courses from "./Pages/Courses";
import About from "./Pages/About";
import Layout from "./Pages/Layout"; 
import Contact from "./Pages/Contact";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="courses" element={<Courses />} />
    </Route>
  )
);

function App() {
  return (
    <div style={{
      backgroundColor:"black",
      color:"white",

    }}>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;