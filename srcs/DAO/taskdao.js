class TaskDao {

    constructor(db) {

        this._db = db
    }


    listTasks() {

        return new Promise ((res, rej) => {

            this._db.all('SELECT * FROM TAREFAS', (err, rows) => {

                    if(err) {rej(`Tentei listar os dados e olha no que deu: ${err}`)}

                    res(rows);
            })
        })
        
    }

    add(req) {
        return new Promise ( (res, rej) => {

            this._db.run(`INSERT INTO TAREFAS (titulo, descricao, status) VALUES (?, ?, ?)`, [req.body.titulo, req.body.descricao, req.body.status], (err) =>{

                if(err) {rej(`Tentei inserir novos dados e olha no que deu: ${err}`)}

                res();

            })
        })
    }

    delete(req) {
        return new Promise ((res, rej) => {

            this._db.run(`DELETE FROM TAREFAS WHERE id = ?`, [req.params.id], (err) => {
                
                if (err) {rej(`Tentei deletar alguns dados e olha no que deu: ${err}`)
            } else {
                    res("deletado!");}
            })
        })
    }


}

module.exports = TaskDao