import { jsx as _jsx } from "react/jsx-runtime";
import AddIcon from '@mui/icons-material/Add';
import { IconButton, styled } from '@mui/material';
const IconButtonEstilizado = styled(IconButton)({
    border: '1px',
    borderColor: '#5e5e5e',
    borderStyle: 'groove',
    width: '50px',
    height: '50px',
    marginTop: '6vh',
    marginRight: '1vw'
});
const Botao = ({ onClick }) => {
    return (_jsx(IconButtonEstilizado, { color: "default", "aria-label": "add", onClick: onClick, children: _jsx(AddIcon, {}) }));
};
export default Botao;