// src/insertData.ts
import dbInstance from './database.js';
// Função para inserir um novo usuário
function insertUsuario({ nome, email, senha }) {
    dbInstance.db.run('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], function (err) {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log(`Usuário adicionado com ID: ${this.lastID}`);
        }
    });
}
// Função para inserir uma nova atividade diária
function insertAtividadeDiaria(data) {
    const { idUsuario, ddSemana, data: dataAtividade, lembrete, notas, treino, leuHoje, tirouFoto, foto, dieta, lendo } = data;
    dbInstance.db.run('INSERT INTO atividades_diarias (id_usuario, ddSemana, data, lembrete, notas, treino, leuHoje, tirouFoto, foto, dieta, lendo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
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
    ], function (err) {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log(`Atividade diária adicionada com ID: ${this.lastID}`);
        }
    });
}
// Inserir dados de exemplo
insertUsuario({
    nome: 'John Doe',
    email: 'john@example.com',
    senha: 'senha123'
});
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
});
function getAllUsuarios() {
    dbInstance.db.run('SELECT * FROM usuarios', [], (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Usuários:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
}
// Função para obter todas as atividades diárias
function getAllAtividadesDiarias() {
    dbInstance.db.run('SELECT * FROM atividades_diarias', [], (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        else {
            console.log('Atividades Diárias:');
            rows.forEach((row) => {
                console.log(row);
            });
        }
    });
}
// Chamar as funções para obter dados
getAllUsuarios();
getAllAtividadesDiarias();
