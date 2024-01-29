import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, styled } from "@mui/material";
import InputTexto from "../../components/InputTexto";
import { useState } from "react";
import Logo from '../../assets/notes.svg';
const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
});
const Botao = styled(Button)({
    marginTop: '10px',
    borderStyle: 'dashed',
    borderColor: '#000',
    backgroundColor: '#cac3c3aa',
    color: '#000'
});
const Imagem = styled('img')({
    width: '120px',
    height: '150px'
});
export default function Cadastro() {
    const [usuario, setUsuario] = useState({
        'email': '',
        'user': '',
        'senha': ''
    });
    const atualizarCampo = (campo, valor) => {
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [campo]: valor,
        }));
    };
    const handleChangeCampo = (event) => {
        const nomeCampo = event.target.name;
        const valorCampo = event.target.value;
        atualizarCampo(nomeCampo, valorCampo);
    };
    const retornaUsuario = () => console.log(usuario);
    return (_jsxs(Container, { children: [_jsx(Imagem, { src: Logo }), _jsx(InputTexto, { name: "user", label: "Username", value: usuario.user, onChange: handleChangeCampo }), _jsx(InputTexto, { name: "email", label: "Email", value: usuario.email, onChange: handleChangeCampo }), _jsx(InputTexto, { type: "password", name: "senha", label: "Senha", value: usuario.senha, onChange: handleChangeCampo }), _jsx(Botao, { onClick: retornaUsuario, children: "Cadastrar" })] }));
}
;
