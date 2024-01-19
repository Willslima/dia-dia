import { TextField, styled } from "@mui/material";
import React, { ChangeEvent } from "react";


interface Props {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


const TextFieldEstilizado = styled(TextField)({
    width: '31vw',
    marginLeft: '2vw',
    marginTop: '1vh'
})

export default function InputTexto({ label, value, onChange }: Props) {
    return (
        <TextFieldEstilizado id="filled-basic" label={label} variant="filled" value={value} onChange={onChange} />
    )
};