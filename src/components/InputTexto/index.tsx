import { TextField, styled } from "@mui/material";
import { ChangeEvent } from "react";


interface Props {
    name: string;
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    type?: string;
}


const TextFieldEstilizado = styled(TextField)({
    width: '31vw',
    marginLeft: '2vw',
    marginTop: '1vh'
})

export default function InputTexto({ name, label, value, onChange, type }: Props) {
    return (
        <TextFieldEstilizado type={type} name={name} id="filled-basic" label={label} variant="filled" value={value} onChange={onChange} />
    )
};