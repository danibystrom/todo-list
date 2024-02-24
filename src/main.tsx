import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import ArchivedTodos from "./ArchivedTodos";
import HomePage from "./HomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="archived" element={<ArchivedTodos />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
