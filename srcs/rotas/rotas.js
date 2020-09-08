const geraPaginaTodo = require("../views/todoApp.js");
const tarefas = require("../tarefas/tarefas.js")


module.exports = (app) => {
//module exports como function 
//parametro app sera substituido pelo express
    app.get('/:id', (req, resp) => {

        let idr = req.params.id;
        
        module.exports = idr
        resp.send(geraPaginaTodo(tarefas));
    });
}