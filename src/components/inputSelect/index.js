import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';
const InputSelect = ({ valores, label, value, handleChange }) => {
    const FormControllEstilizado = styled(FormControl)({
        width: '17vw',
        marginLeft: '1vw',
        marginTop: '1vh',
    });
    return (_jsx(Box, { sx: { minWidth: 120 }, children: _jsxs(FormControllEstilizado, { children: [_jsx(InputLabel, { id: "demo-simple-select-label", children: label }), _jsx(Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: value, label: label, onChange: handleChange, children: valores?.map((valor, index) => (_jsx(MenuItem, { value: index, children: valor }, index))) })] }) }));
};
export default InputSelect;
