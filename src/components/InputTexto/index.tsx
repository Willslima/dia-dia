import { TextField, styled } from "@mui/material";

interface Props {
    label: string
}

const TextFieldEstilizado = styled(TextField)({
    width: '31vw',
    marginLeft: '2vw',
    marginTop: '1vh'
})

export default function InputTexto({ label }: Props) {
    return (

        <TextFieldEstilizado id="filled-basic" label={label} variant="filled" />

    )
};