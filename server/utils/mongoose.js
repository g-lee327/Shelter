console.log("Im the Mongoose.js file")

/*
    1. const mongoose , fs , path
    2. module.exports to pass on contents of this file to the server
    3. create a function that connects to the database & create a list of all model files and aquire them one at a time 
    4. move to creating models

*/

const mongoose = require('mongoose'),
            fs = require('fs'),
          path = require('path'),
   models_path = path.join(__dirname, "../models"),
        models = fs.readdirSync(models_path);  //requiring the models files

module.exports = function(DB_NAME) {
    //connecting mongoose the database (DB_NAME)
    mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
    //for looping through all the models and every file ending with .js 
    //require all the models
    for(let model of models) {
        if (model.endsWith('.js')){
            require(path.join(models_path, model));
        }
    }
}

// you can copy and reuse 