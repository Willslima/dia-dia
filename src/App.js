import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from '@mui/material';
// import Home from './pages/Home'
import Login from './pages/Login';
const Container = styled('div')({});
function App() {
    return (_jsx(Container, { children: _jsx(Login, {}) }));
}
export default App;
