console.log ("Pet.js from models")

const mongoose = require('mongoose')
 

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Type is required"], //backend validations!
        minlength: [3, "Name is to short... rename!"]
        
    },

    type: {
        type: String,
        required: [true, "Type is required"], //backend validations!
        minlength: [3, "To short...try again!"]
    },

    description: {
        type: String,
        required: [true, "This is required"], //backend validations!
        minlength: [3, "Need longer discription!"]
    },
    skillOne: {
        type: String,
        required: [false], //backend validations!
        minlength: [0]
    },
    skillTwo: {
        type: String,
        required: [false], //backend validations!
        minlength: [0]
    },
    skillThree: {
        type: String,
        required: [false,], //backend validations!
        minlength: [0]
    },
    likes: {
        type: Number,
        default: 0,
        
    },
}, {timestamps: true});


mongoose.model("Pet", PetSchema);
