import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { styled } from '@mui/material'
import Tabela from './components/Tabela/index.tsx'

const DivEstilizada = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Tabela />
  </React.StrictMode>,
)
