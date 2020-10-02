const TaskDao = require("../DAO/taskdao");
const db = require('../configs/db');
const geraPaginaTodo = require("../views/todoApp");

const taskdao = new TaskDao(db);

class ControlData {

    constructor() {
        throw('nem vem')
    }


    static list() {

        return (req, resp) => {

            taskdao.listTasks().then((rows) => {

                resp.send(geraPaginaTodo(rows))
            }).catch((err) => {throw err})
        }
    }


    
    static add() {

        return (req, resp) => {
            taskdao.add(req).then((rows) => {
                resp.redirect('/')
            }).catch((err) => {throw err})
        }

    }

    static delete() {
        return (req, resp) => {
            taskdao.delete(req).then((row) => {
               // console.log(row)
                resp.send()
            }).catch((err) => {throw err})
        } 
    }

}

module.exports = ControlData