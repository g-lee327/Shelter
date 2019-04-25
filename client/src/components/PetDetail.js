import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class PetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: '',
                type: '',
                description: '',
                skillOne: '',
                skillTwo: '',
                skillThree: '',
                likes: ''
            },
            count:0,
            errors: {},
            
            
        }
    }
    
    componentDidMount = () => {
    
        axios.get(`/pets/${this.props.match.params._id}`)
        .then(res => {
            this.setState({pet: res.data.pet});
        }) .catch (err => {
            console.log(err);
        });
    };
    
    incrementMe = (e) => {
        document.getElementById("like").disabled=true;
        let newCount = this.state.count +1
            e.likes ++
        this.setState({
            count: newCount
        })
        console.log(e)
        console.log("!!!!")
        axios.put(`/pets/${this.props.match.params._id}`,e)
        .then(res => {
            if(res.data.errors){
                this.setState({errors: res.data.errors.errors});
                
            }else {
                this.props.history.push("/");
                console.log(this.state.pet)
            }
        }).catch(err => {
            console.log(err);
        });
        
    }





    delete = (e) => {
        axios.delete(`/pets/${this.props.match.params._id}`)
            .then(res => {
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div>
           <Link to="/">HOME</Link>
            <h1>Details about: {this.state.pet.name}</h1>
            <h3>Pet Type: {this.state.pet.type}</h3>
            <h3>Description: {this.state.pet.description}</h3>
            <h3>Skills:</h3> <h4>{this.state.pet.skillOne}</h4>
            <h4>{this.state.pet.skillOne}</h4>
            <h4>{this.state.pet.skillTwo}</h4>
            <h4>{this.state.pet.skillThree}</h4>
            <h3>Likes:</h3>
            <h4>{this.state.pet.likes}</h4>
            
            <button onClick={this.delete}>Adopt</button>
            <button id="like"  onClick={this.incrementMe.bind(this, this.state.pet)}>Likes: </button> 
            </div>
        )};
    }

export default PetDetail;