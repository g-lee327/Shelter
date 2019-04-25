import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class NewPetForm extends Component {
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
            },
            errors: {}
        }
    }


    changeName = (e) => {
        this.setState({pet: {...this.state.pet, name: e.target.value}});
    }
    changeType = (e) => {
        this.setState({pet: {...this.state.pet, type: e.target.value}});
    }

    changeDescription = (e) => {
        this.setState({pet: {...this.state.pet, description: e.target.value}});
    }
    changeSkillOne = (e) => {
        this.setState({pet: {...this.state.pet, skillOne: e.target.value}});
    }
    changeSkillTwo = (e) => {
        this.setState({pet: {...this.state.pet, skillTwo: e.target.value}});
    }
    changeSkillThree = (e) => {
        this.setState({pet: {...this.state.pet, skillThree: e.target.value}});
    }

    create = (e) => {
        e.preventDefault();
        axios.post("/pets", this.state.pet)
        .then(res => {
            if(res.data.errors){
                this.setState({errors: res.data.errors.errors});
                console.log(this.state);
            }else {
                this.props.history.push("/");
                console.log(this.state.pet)
            }
        }).catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return (
            <div className="jumbotron">
                <legend>Add Pet</legend>
                <form onSubmit={this.create}>
                <p>
                    Name:&nbsp;
                    <input type="text" onChange={this.changeName} />
                    {
                        (this.state.errors.name) ? 
                        <span className="error">&nbsp;{this.state.errors.name.message}</span> :
                        <span></span>
                    }
                </p>
                <p>
                    Type:&nbsp;
                    <input type="text" onChange={this.changeType} />
                    {
                        (this.state.errors.type) ? 
                        <span className="error">&nbsp;{this.state.errors.type.message}</span> :
                        <span></span>
                    }
                </p>
                <p>
                    Description:&nbsp;
                    <input type="text" onChange={this.changeDescription} />
                    {
                        (this.state.errors.description) ? 
                        <span className="error">&nbsp;{this.state.errors.description.message}</span> :
                        <span></span>
                    }
                </p>
               
                <h3>Skills:</h3>
                    <p>
                        <input type="text" onChange={this.changeSkillOne} />
                    {
                        (this.state.errors.skillOne) ? 
                        <span className="error">&nbsp;{this.state.errors.skillOne.message}</span> :
                        <span></span>
                    }
                    </p>
                    <p>
                        <input type="text" onChange={this.changeSkillTwo} />
                    {
                        (this.state.errors.skillTwo) ? 
                        <span className="error">&nbsp;{this.state.errors.skillTwo.message}</span> :
                        <span></span>
                    }
                    </p>
                    <p>
                        <input type="text" onChange={this.changeSkillThree} />
                    {
                        (this.state.errors.skillThree) ? 
                        <span className="error">&nbsp;{this.state.errors.skillThree.message}</span> :
                        <span></span>
                    }
                    </p>
                        <button type="submit">Add Pet</button>
                    
                    <Link to={"/"}>
                        <button>Cancel</button>
                    </Link>
                </form>
            </div>
        );
    }   
}

export default NewPetForm; 

    