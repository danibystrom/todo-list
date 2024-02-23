import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import ArchivedTodos from "./ArchivedTodos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route index Component={App} />
      <Route path="archivedtodos" Component={ArchivedTodos} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
