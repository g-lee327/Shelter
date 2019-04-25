console.log("i'm server.js")

const express = require('express'), 
           bp = require('body-parser'),
        
         path = require('path'),
      DB_NAME = "petshelter",
         port = 8000,
          app = express();


app.use(bp.json()); //puts form data into json format 
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(path.join(__dirname, './client/build')));


//requiring the mongoose to be able to use it 
require('./server/utils/mongoose')(DB_NAME);  //DB_NAME is the name of our database defined in const
require('./server/utils/routes')(app); //allows us to pass app through the routes.js becuase it is a function 
//to use the routes that we create (app revefers to the express constant)

//if you dont recognize then resopond with index.html
app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/build/index.html'));
});

//telling the server to run (shows the port we are listening to) 
app.listen(port, ()  =>{
    console.log(`listening on port: ${port}`); // these are backtics (``)!!!!!! not quotes('')
});


//once you make your server.js file (typicall allways the same) start working on mongoose.js file 

	
/*
    1) code out the server.js file 
        -typicall always the same 
    2) code out the mongoose.js file (in the utils directory)
        
    
  
*/ 