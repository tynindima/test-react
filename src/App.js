import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

export default function App() {
  return (
    <div className="web">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}
