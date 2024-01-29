import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Novo código para React Router v6 ou superior
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
const AppRoutes = () => {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/home", element: _jsx(Home, {}) }), _jsx(Route, { path: "/cadastro", element: _jsx(Cadastro, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) })] }) }));
};
export default AppRoutes;
