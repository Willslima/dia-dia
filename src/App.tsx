import { styled } from '@mui/material'
import InputTexto from './components/InputTexto'
import InputTextArea from './components/InputTextArea'
import InputSelect from './components/inputSelect'
import Botao from './components/Botao'
import Tabela from './components/Tabela'
import { useState } from 'react'

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '33vh'
})

const ContainerInputs = styled('div')({
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-around',
})

const ContainerTextArea = styled('div')({
  display: 'flex',
  width: '100vw',
  height: '25vh'
})

function App() {

  type listaDeObjetos = { id: string, var: string[], titulo: string, value?: string, onChange: any }

  const DIAS: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  const TREINOS: string[] = ['Peito', 'Costas', 'Perna', 'Ombro', 'Braço', 'Fechado', 'Faltei', 'Folga', 'Folga S.', 'Folga D.']

  const LEUHOJE: string[] = ['Sim', 'Não']
  const TIROUFOTO: string[] = ['Sim', 'Não']
  const DIETA: string[] = ['Sim', 'Não']

  const [dds, setDds] = useState('')
  const [tdd, setTdd] = useState('')
  const [leuHoje, setLeuHoje] = useState('')
  const [tirouFoto, setTirouFoto] = useState('')
  const [dieta, setDieta] = useState('')

  const Listas: listaDeObjetos[] = [
    {
      'id': '0', 'var': DIAS, 'titulo': 'Dias da semana', value: dds, onChange: (e: any) => setDds(e.target.value)
    },
    { 'id': '1', 'var': TREINOS, 'titulo': 'Treino do dia', value: tdd, onChange: (e: any) => setTdd(e.target.value) },
    { 'id': '2', 'var': LEUHOJE, 'titulo': 'Leu hoje', value: leuHoje, onChange: (e: any) => setLeuHoje(e.target.value) },
    { 'id': '3', 'var': TIROUFOTO, 'titulo': 'Tirou foto', value: tirouFoto, onChange: (e: any) => setTirouFoto(e.target.value) },
    { 'id': '4', 'var': DIETA, 'titulo': 'Dieta', value: dieta, onChange: (e: any) => setDieta(e.target.value) },
  ]

  const [textArea, setTextArea] = useState('')
  const [lembrete, setLembrete] = useState('')
  const [foto, setFoto] = useState('')
  const [lendo, setLendo] = useState('')

  const handleClick = () => {
    console.log(dds, tdd, leuHoje, tirouFoto, dieta, lembrete, foto, lendo, textArea);
  };

  return (
    <Container>
      <ContainerInputs>
        {
          Listas.map(lista => <InputSelect label={lista.titulo} valores={lista.var} value={lista.value} handleChange={lista.onChange} />)
        }
      </ContainerInputs>
      <ContainerTextArea>
        <InputTexto key='lembrete' label='Lembrete' value={lembrete} onChange={e => setLembrete(e.target.value)} />
        <InputTexto key='foto' label='Foto' value={foto} onChange={e => setFoto(e.target.value)} />
        <InputTexto key='lendo' label='Lendo' value={lendo} onChange={e => setLendo(e.target.value)} />
        <InputTextArea value={textArea} onChange={(e) => setTextArea(e.target.value)} />
        <Botao onClick={handleClick} />
      </ContainerTextArea>
      <Tabela />
    </Container>
  )
}

export default App


