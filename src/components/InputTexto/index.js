import { jsx as _jsx } from "react/jsx-runtime";
import { TextField, styled } from "@mui/material";
const TextFieldEstilizado = styled(TextField)({
    width: '31vw',
    marginLeft: '2vw',
    marginTop: '1vh'
});
export default function InputTexto({ name, label, value, onChange, type }) {
    return (_jsx(TextFieldEstilizado, { type: type, name: name, id: "filled-basic", label: label, variant: "filled", value: value, onChange: onChange }));
}
;
