
const Pets = require('../controllers/pets');



module.exports = function (app) {

    //pets are here!!!

    app.get('/pets', Pets.getAll); //getting all activities
    app.post('/pets', Pets.create); //post request is going to create activity 
    app.get('/pets/:_id', Pets.getOne); //getting one activity by the id 
    app.put('/pets/:_id', Pets.update); // put method replaces (kinda like update)
    app.delete('/pets/:_id', Pets.delete); // delete method deletes

}