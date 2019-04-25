console.log("pets.js in controllers")

const mongoose = require('mongoose'),
           Pet = mongoose.model("Pet");

class Pets {
    getAll(req, res){  
        Pet.find({}, (err, pets) => { //find everything and returns err or the list of activites
            if(err) {console.log(err); } //remember to console.log errs 
            res.json({status: 'ok', pets: pets}); //passing a list of activites (a list of activites called activites)
        });
    }
    getOne(req, res){
        Pet.findOne({_id: req.params._id}, (err, pet) => { //req.params._id - the variable of the request by id 
            if(err) { console.log(err); }
            res.json({status: 'ok', pet: pet});
        });
    }
    create(req, res){ 
        let p = new Pet(req.body); //req.body is the how the form data is given 
        //if there is only one variable you dont need parenthses 
        //save the new activity
        p.save(err => { 
            if(err){
                res.json({status: "not ok", errors: err}); //shows errors
            } else {
                res.json({status: 'ok'}); //this will run if it saves correctly 
            }
        });
    }
    update(req, res){
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true}, err => { //req.body- is the new form data
            if(err) {
                res.json({status: "not ok", errors: err});
            } else {
                res.json({status: 'ok'});
            }
        });
    }
    delete(req, res){
        Pet.findOneAndDelete({_id: req.params._id}, err => {
            if(err) { console.log(err); }
            res.json({status: 'ok'});
        });
    }
}

module.exports = new Pets(); //make an instance of activities because it is a class









