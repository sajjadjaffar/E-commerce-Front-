import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NavBar from "./sheard/components/navBar";
import About from "./page/about";
import Home from "./page/home";
import Footer from "./sheard/components/Footer";
import Blog from "./page/blog";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <NavBar />
  //         <Home />
  //         <Footer />
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/About",
  //     element: (
  //       <>
  //         <NavBar />
  //         <About />
  //         <Footer />
  //       </>
  //     ),
  //   },
  // ]);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
