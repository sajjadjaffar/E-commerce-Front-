import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./sheard/components/navBar";
import About from "./page/about";
import Home from "./page/home";
import Footer from "./sheard/components/Footer";
import Blog from "./page/blog";
import Listing from "./page/listing";
import ContactUS from "./page/contactUs";
import SignUp from "./page/signUp";
import Login from "./page/login";

import ProfilePage from "./page/profile";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("uniqueId")
  );
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [nameD, setNameD] = useState("");
  const [imageD, setImageD] = useState("");

  return (
    <>
      <BrowserRouter>
        <NavBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          nameD={nameD}
          imageD={imageD}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profilepage"
            element={
              <ProfilePage
                password={password}
                email={email}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                password={password}
                email={email}
                setNameD={setNameD}
                setImageD={setImageD}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
