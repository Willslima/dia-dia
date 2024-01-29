import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './pages/Login/index.js';
import Cadastro from './pages/Cadastro/index.js';
import Home from './pages/Home/index.js';
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
    }, {
        path: "login",
        element: _jsx(Login, {}),
    }, {
        path: "cadastro",
        element: _jsx(Cadastro, {}),
    }, {
        path: "notas",
        element: _jsx(Home, {}),
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
