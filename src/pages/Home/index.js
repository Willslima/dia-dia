import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from '@mui/material';
import InputTexto from '../../components/InputTexto';
import InputTextArea from '../../components/InputTextArea';
import InputSelect from '../../components/inputSelect';
import Botao from '../../components/Botao';
import Tabela from '../..//components/Tabela';
import { useState } from 'react';
import createData from '../../service/createData';
const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '33vh'
});
const ContainerInputs = styled('div')({
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
});
const ContainerTextArea = styled('div')({
    display: 'flex',
    width: '100vw',
    height: '25vh'
});
function Home() {
    const DIAS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
    const TREINOS = ['Peito', 'Costas', 'Perna', 'Ombro', 'Braço', 'Fechado', 'Faltei', 'Folga', 'Folga S.', 'Folga D.'];
    const LEUHOJE = ['Sim', 'Não'];
    const TIROUFOTO = ['Sim', 'Não'];
    const DIETA = ['Sim', 'Não'];
    const [dds, setDds] = useState('');
    const [tdd, setTdd] = useState('');
    const [leuHoje, setLeuHoje] = useState('');
    const [tirouFoto, setTirouFoto] = useState('');
    const [dieta, setDieta] = useState('');
    const Listas = [
        {
            'id': '0', 'var': DIAS, 'titulo': 'Dias da semana', value: dds, onChange: (e) => setDds(e.target.value)
        },
        { 'id': '1', 'var': TREINOS, 'titulo': 'Treino do dia', value: tdd, onChange: (e) => setTdd(e.target.value) },
        { 'id': '2', 'var': LEUHOJE, 'titulo': 'Leu hoje', value: leuHoje, onChange: (e) => setLeuHoje(e.target.value) },
        { 'id': '3', 'var': TIROUFOTO, 'titulo': 'Tirou foto', value: tirouFoto, onChange: (e) => setTirouFoto(e.target.value) },
        { 'id': '4', 'var': DIETA, 'titulo': 'Dieta', value: dieta, onChange: (e) => setDieta(e.target.value) }
    ];
    const [textArea, setTextArea] = useState('');
    const [lembrete, setLembrete] = useState('');
    const [foto, setFoto] = useState('');
    const [lendo, setLendo] = useState('');
    const [rows, setRows] = useState([]);
    const handleClick = () => {
        console.log(rows);
        const hoje = new Date();
        setRows([...rows,
            createData((rows.length + 1), dds, hoje, lembrete, textArea, tdd, leuHoje ? true : false, tirouFoto ? true : false, foto, dieta ? true : false, lendo)]);
    };
    return (_jsxs(Container, { children: [_jsx(ContainerInputs, { children: Listas.map((lista) => _jsx(InputSelect, { label: lista.titulo, valores: lista.var, value: lista.value, handleChange: lista.onChange }, lista.titulo)) }), _jsxs(ContainerTextArea, { children: [_jsx(InputTexto, { label: 'Lembrete', value: lembrete, onChange: e => setLembrete(e.target.value) }, 'lembrete'), _jsx(InputTexto, { label: 'Foto', value: foto, onChange: e => setFoto(e.target.value) }, 'foto'), _jsx(InputTexto, { label: 'Lendo', value: lendo, onChange: e => setLendo(e.target.value) }, 'lendo'), _jsx(InputTextArea, { value: textArea, onChange: (e) => setTextArea(e.target.value) }), _jsx(Botao, { onClick: handleClick })] }), _jsx(Tabela, { rows: rows })] }));
}
export default Home;
