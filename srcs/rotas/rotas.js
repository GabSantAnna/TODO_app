const ControlData = require("../controller/controlData");



const cors = require('cors');
const bodyParser = require('body-parser'); 

module.exports = (app) => {
    //module exports como function | parametro app sera substituido pelo express

    app.use(cors());
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended: true}));
    
   

    app.get('/', ControlData.list())

    app.post('/' , ControlData.add())

    app.delete('/:id', ControlData.delete())
}