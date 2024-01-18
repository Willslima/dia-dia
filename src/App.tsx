import { styled } from '@mui/material'
import Tabela from './components/Tabela'
import InputTexto from './components/InputTexto'
import InputTextArea from './components/InputTextArea'
import InputSelect from './components/inputSelect'
import Botao from './components/Botao'

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
  display: 'flex'
})

function App() {
  const DIAS: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex']

  const TREINOS: string[] = ['Peito', 'Costas', 'Perna', 'Ombro', 'Braço', 'Fechado', 'Faltei', 'Folga', 'Folga S.', 'Folga D.']

  const LABELS: string[] = [
    'Lembrete',
    'Foto',
    'Lendo'
  ]

  const LEUHOJE: string[] = ['Sim', 'Não']
  const TIROUFOTO: string[] = ['Sim', 'Não']
  const DIETA: string[] = ['Sim', 'Não']

  type listaDeObjetos = { id: string, var: string[], titulo: string }

  const Listas: listaDeObjetos[] = [
    { 'id': '0', 'var': DIAS, 'titulo': 'Dias da semana' },
    { 'id': '1', 'var': TREINOS, 'titulo': 'Treino do dia' },
    { 'id': '2', 'var': LEUHOJE, 'titulo': 'Leu hoje' },
    { 'id': '3', 'var': TIROUFOTO, 'titulo': 'Tirou foto' },
    { 'id': '4', 'var': DIETA, 'titulo': 'Dieta' },
  ]

  return (
    <Container>
      <ContainerInputs>
        {
          Listas.map(lista => <InputSelect label={lista.titulo} valores={lista.var} />)
        }
      </ContainerInputs>
      <ContainerTextArea>
        {LABELS.map((label, key) => <InputTexto key={key} label={label} />)}
        <InputTextArea />
        <Botao />
      </ContainerTextArea>
    </Container>
  )
}

export default App
