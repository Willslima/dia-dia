import { Button, styled } from "@mui/material"
import InputTexto from "../../components/InputTexto"
import { useState } from "react"
import Logo from '../../assets/notes.svg'
import { getUsers } from "../../service/apiService"

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
})

const Botao = styled(Button)({
    marginTop: '10px',
    borderStyle: 'dashed',
    borderColor: '#000',
    backgroundColor: '#cac3c3aa',
    color: '#000'
})

const Imagem = styled('img')({
    width: '120px',
    height: '150px'
})

export default function Login() {
    function autentication() {
        getUsers()
            .then(data => {
                console.log(usuario.email)
                console.log(usuario.senha)
                console.log(data)
                window.location.href = '/notas'
            })
            .catch(err => console.log(err))
    }

    const [usuario, setUsuario] = useState({
        'email': '',
        'user': '',
        'senha': ''
    })

    const atualizarCampo = (campo: string, valor: any) => {
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [campo]: valor,
        }));

    };

    const handleChangeCampo = (event: { target: { name: string; value: string | number } }) => {
        const nomeCampo = event.target.name;
        const valorCampo = event.target.value;
        atualizarCampo(nomeCampo, valorCampo);
    };

    return (
        <Container>
            <Imagem src={Logo} />

            <InputTexto name="email" label={"Email"} value={usuario.email} onChange={handleChangeCampo} />
            <InputTexto type="password" name="senha" label={"Senha"} value={usuario.senha} onChange={handleChangeCampo} />
            <p>Faça seu cadastro clicando <a href="/cadastro">aqui</a>!</p>

            <Botao onClick={autentication}>Entrar</Botao>
        </Container>
    )
};
