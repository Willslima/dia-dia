import { TextField, styled } from "@mui/material";

const TextFieldEstilizado = styled(TextField)({
    marginLeft: '2vw',
    marginRight: '2vw',
    marginTop: '1vh',
    width: '90vw',
    height: '50vh',
})

export default function InputTextArea() {
    return (
        <TextFieldEstilizado
            id="outlined-multiline-static"
            label="Nota"
            multiline
            rows={4}
            placeholder="Digite a sua nota"
        />
    )
};
