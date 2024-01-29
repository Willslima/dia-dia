
// Novo código para React Router v6 ou superior
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
