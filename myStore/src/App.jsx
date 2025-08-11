import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "./sheard/components/navBar";
import About from "./page/about";
import Home from "./page/home";
import Footer from "./sheard/components/Footer";
import Blog from "./page/blog";
import Listing from "./page/Admin-listing";
import ContactUS from "./page/contactUs";
import SignUp from "./page/signup";
import Login from "./page/login";
import ProfilePage from "./page/profile";
import Users from "./page/Admin-users/users";
import UserCreation from "./page/Admin-users/create-users";
import EditUser from "./page/Admin-users/edit-users";
import StockPage from "./page/Admin-listing/stock-update";
import StockEditPage from "./page/Admin-listing/stock-edit";
import Cart from "./page/cart";
import OrdersPage from "./page/Admin-orders";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("uniqueId")
  );

  const [admin, setAdmin] = useState(
    () => localStorage.getItem("admin") === "true"
  );

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cart, setCart] = useState([]);
  const [totalCartItem, setTotalCartItem] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          admin={admin}
          setAdmin={setAdmin}
          totalCartItem={totalCartItem}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/listing"
            element={
              <Listing
                admin={admin}
                cart={cart}
                setCart={setCart}
                setTotalCartItem={setTotalCartItem}
                totalCartItem={totalCartItem}
              />
            }
          />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/users" element={<Users />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createuser" element={<UserCreation />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/stockpage" element={<StockPage />} />
          <Route path="/stockeditpage" element={<StockEditPage />} />
          <Route path="/orderspage" element={<OrdersPage />} />
          <Route
            path="/cartpage"
            element={
              <Cart
                cart={cart}
                setTotalCartItem={setTotalCartItem}
                setCart={setCart}
              />
            }
          />
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
              <Login setIsLoggedIn={setIsLoggedIn} setAdmin={setAdmin} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
