import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";
import NewDetail from "./pages/NewDetail";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/news/:newId" element={<NewDetail />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/news">
        <Route index element={<NewsPage />} />
        <Route path=":newId" element={<NewDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
