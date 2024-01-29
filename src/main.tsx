import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/index.js';
import Cadastro from './pages/Cadastro/index.js';
import Home from './pages/Home/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "login",
    element: <Login />,
  }, {
    path: "cadastro",
    element: <Cadastro />,
  }, {
    path: "notas",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
