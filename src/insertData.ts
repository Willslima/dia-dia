// src/insertData.ts
import dbInstance from './database.js'
import { RunResult } from 'sqlite3'

// Tipos para dados do usuário e atividade diária
interface UsuarioData {
  nome: string
  email: string
  senha: string
}

interface AtividadeDiariaData {
  idUsuario: number
  ddSemana: string
  data: string
  lembrete: string
  notas: string
  treino: string
  leuHoje: boolean
  tirouFoto: boolean
  foto: string
  dieta: boolean
  lendo: string
}

// Função para inserir um novo usuário
function insertUsuario({ nome, email, senha }: UsuarioData): void {
  dbInstance.db.run(
    'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha],
    function (this: RunResult, err: Error | null) {
      if (err) {
        console.error(err.message)
      } else {
        console.log(`Usuário adicionado com ID: ${this.lastID}`)
      }
    }
  )
}

// Função para inserir uma nova atividade diária
function insertAtividadeDiaria(data: AtividadeDiariaData): void {
  const {
    idUsuario,
    ddSemana,
    data: dataAtividade,
    lembrete,
    notas,
    treino,
    leuHoje,
    tirouFoto,
    foto,
    dieta,
    lendo
  } = data

  dbInstance.db.run(
    'INSERT INTO atividades_diarias (id_usuario, ddSemana, data, lembrete, notas, treino, leuHoje, tirouFoto, foto, dieta, lendo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      idUsuario,
      ddSemana,
      dataAtividade,
      lembrete,
      notas,
      treino,
      leuHoje,
      tirouFoto,
      foto,
      dieta,
      lendo
    ],
    function (this: RunResult, err: Error | null) {
      if (err) {
        console.error(err.message)
      } else {
        console.log(`Atividade diária adicionada com ID: ${this.lastID}`)
      }
    }
  )
}

// Inserir dados de exemplo
insertUsuario({
  nome: 'John Doe',
  email: 'john@example.com',
  senha: 'senha123'
})

insertAtividadeDiaria({
  idUsuario: 1,
  ddSemana: 'Segunda',
  data: '2024-01-24',
  lembrete: 'Lembrete para hoje',
  notas: 'Notas importantes',
  treino: 'Treino de hoje',
  leuHoje: true,
  tirouFoto: false,
  foto: 'caminho/da/foto.jpg',
  dieta: true,
  lendo: 'Livro que está lendo'
})

function getAllUsuarios(): void {
  dbInstance.db.run(
    'SELECT * FROM usuarios',
    [],
    (err: { message: any }, rows: any[]) => {
      if (err) {
        console.error(err.message)
      } else {
        console.log('Usuários:')
        rows.forEach((row: any) => {
          console.log(row)
        })
      }
    }
  )
}

// Função para obter todas as atividades diárias
function getAllAtividadesDiarias(): void {
  dbInstance.db.run(
    'SELECT * FROM atividades_diarias',
    [],
    (err: { message: any }, rows: any[]) => {
      if (err) {
        console.error(err.message)
      } else {
        console.log('Atividades Diárias:')
        rows.forEach((row: any) => {
          console.log(row)
        })
      }
    }
  )
}

// Chamar as funções para obter dados
getAllUsuarios()
getAllAtividadesDiarias()
