// src/database.js
import { Database } from 'sqlite3'

class Database {
  constructor() {
    // Abra ou crie o banco de dados
    this.db = new _Database('./seu_banco_de_dados.db')

    // Ative a verificação de chaves estrangeiras
    this.db.run('PRAGMA foreign_keys = ON;')

    // Crie as tabelas
    this.createUsuariosTable()
    this.createAtividadesDiariasTable()
  }

  createUsuariosTable() {
    this.db.run(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id_usuario INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL
      );
    `)
  }

  createAtividadesDiariasTable() {
    this.db.run(`
      CREATE TABLE IF NOT EXISTS atividades_diarias (
        id_atividade INTEGER PRIMARY KEY,
        id_usuario INTEGER,
        ddSemana TEXT,
        data DATE,
        lembrete TEXT,
        notas TEXT,
        treino TEXT,
        leuHoje BOOLEAN,
        tirouFoto BOOLEAN,
        foto TEXT,
        dieta BOOLEAN,
        lendo TEXT,
        FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
      );
    `)
  }

  // Adicione mais métodos conforme necessário para interagir com o banco de dados
}

// Crie uma instância do banco de dados
const dbInstance = new Database()

// Feche o banco de dados quando terminar
process.on('exit', () => {
  dbInstance.db.close()
})

export default dbInstance
