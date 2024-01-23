import { jsx as _jsx } from "react/jsx-runtime";
import { TextField, styled } from "@mui/material";
const TextFieldEstilizado = styled(TextField)({
    marginLeft: '2vw',
    marginRight: '2vw',
    marginTop: '1vh',
    width: '90vw',
    height: '50vh',
});
const InputTextArea = ({ value, onChange }) => {
    return (_jsx(TextFieldEstilizado, { id: "outlined-multiline-static", label: "Nota", multiline: true, rows: 4, placeholder: "Digite a sua nota", value: value, onChange: onChange }));
};
export default InputTextArea;
