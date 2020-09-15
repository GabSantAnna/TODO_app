/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database');/*criando um database*/

/*criando tabela tarefas*/
const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    titulo VARCHAR(64),
    descricao TEXT,
    status VARCHAR(32)
)
`;
/*inserindo dados na tabela tarefas*/
const ADD_TAREFAS = `
INSERT INTO TAREFAS (
    titulo,
    descricao,
    status
    )
VALUES ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo'),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO'),
       ('Pagar contas', 'Pagar boletos de água e luz', 'DOING')
`
/*executando comandos em sequencia*/
db.serialize( ()=> {

    db.run(TAREFAS_SCHEMA, (err)=> {
        if (err) {
            console.log('Erro na criação da tabela tarefas');
            process.exit(1);
        }
    });
    db.run(ADD_TAREFAS, (err) => {
        if (err) {
            console.log('Erro ao adicionar valores ao banco');
            process.exit(1);
        }
    })


db.all('SELECT * FROM TAREFAS', (err, rows) => {
    if (err) {throw err}
    console.log(rows)
    })


})