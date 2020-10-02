//const deleteTask = require('../public/deletetask')

function geraPaginaTodo(db) {
   // const idr = require('../rotas/rotas');
    //console.log(db)
    let cardsTarefas = '';

     for(i = 0; i < db.length; i++) {
         //console.log(db[i])
                 cardsTarefas += 
                `<div class= "card p-3 m-2  border rounded shadow-sm" style="width : 50%" >
                <h2>${db[i].titulo}</h2>
                <p class='mt-1 mb-1'>${db[i].descricao}</p>
                <span style='color: gray; font-size: 17px'>${ db[i].status}</span>
                <div class='d-flex mt-2 justify-content-end' data-id="${db[i].id}">
                    <button class="btn btn-light mr-2"  style='background-color: white; color: gray'>Editar</button>
                    <button class="btn btn-outline-danger" onclick="deleta(event)" style='border: none'> Deletar</button>
                </div>
                </div>`
            
         
     }

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
    
</head>
<body>
    <nav class="nav bg-dark mb-4" style="text-align: center;">
        <h1 class=" py-2 text-light" style="font-family: 'Indie Flower'; width:100%">TODO app</h1>
    </nav>
    <div class="d-flex justify-content-center">
        <div class="w-50 p-4 border rounded shadow-sm"> 
            <form class="flex-fill" id="formulario" action="/" method="POST">
                <div class="form-group">
                    <label for="tituloTarefa"><b>Título:</b></label>
                    <input type="text" class="form-control" id="tituloTarefa" name="titulo" placeholder="Título da tarefa">
                </div>
                <div class="form-group">
                    <label for="descricaoTarefa"><b>Descrição:</b></label>
                    <textarea class="form-control" id="descricaoTarefa" name="descricao" rows="3" placeholder="Insira a descrição da tarefa"></textarea>
                    </div>
                    <div class="form-group">
                    <label for="statusTarefa"><b>Status:</b></label>
                    <input class="form-control"  name="status" placeholder="Insira o status da tarefa"></input>
                </div>
                <button class='btn btn-info mt-3' type="submit"  style="width: 100px">inserir</button>
                
            </form>
        </div>
    </div>
    <div id="todoCard" class="d-flex flex-wrap justify-content-center mt-5">
        <!-- Aqui entram os cards de TODO!-->
        ${cardsTarefas}
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
        function deleta(event) {
            const id = event.target.parentNode.dataset.id
            //console.log(id)
            fetch('http://127.0.0.1:3001/' + id,
            {method : 'DELETE', mode: 'cors',
            cache: 'default',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }}
           ).then(()=>  event.target.parentNode.parentNode.remove()).catch((err) => console.log(err))
        }
    </script>
</body>
</html>`;
}

module.exports = geraPaginaTodo;