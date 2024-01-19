import { TextField, styled } from "@mui/material";
import React, { ChangeEvent } from "react";

interface InputTextAreaProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


const TextFieldEstilizado = styled(TextField)({
    marginLeft: '2vw',
    marginRight: '2vw',
    marginTop: '1vh',
    width: '90vw',
    height: '50vh',
})

const InputTextArea: React.FC<InputTextAreaProps> = ({ value, onChange }) => {
    return (
        <TextFieldEstilizado
            id="outlined-multiline-static"
            label="Nota"
            multiline
            rows={4}
            placeholder="Digite a sua nota"
            value={value}
            onChange={onChange}
        />
    );
};

export default InputTextArea;
