import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductPage,
  BestSelling,
  Eventpage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
} from "./Route";
import "./App.css";
import Store from "./Redux/Store.js";
import { loadUser } from "./Redux/actions/user";
import { ToastContainer } from "react-toastify";
function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />

          <Route path="/products/:name" element={<ProductDetailsPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
