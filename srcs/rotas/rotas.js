const geraPaginaTodo = require("../views/todoApp.js");
const tarefas = require("../tarefas/tarefas.js");
const db = require('../configs/db');




module.exports = (app) => {
//module exports como function 
//parametro app sera substituido pelo express
    app.get('/', (req, resp) => {

        db.all('SELECT * FROM TAREFAS', (err, rows) => {
            if (err) {throw err}
            resp.send(rows);
        }); 
    });
}