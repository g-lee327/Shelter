import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skillOne: "",
                skillTwo: "",
                skillThree: ""
            },
            errors:{}
        }
    }


componentDidMount = () => {
    axios.get(`/pets/${this.props.match.params._id}`)
    .then(res => {
        this.setState({pet: res.data.pet});
        console.log(res.data.pet);
    }).catch (err => {
        console.log(err);
    })
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


    update = (e) => {
        e.preventDefault();
        axios.put(`/pets/${this.props.match.params._id}`, this.state.pet)
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors.errors});
                } else {
                    this.props.history.push('/');
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
        });
}

render() {
    return(
        <div className="jumbotron">
        <legend>Add Pet</legend>
        <form onSubmit={this.update}>
        <p>
            Name:&nbsp;
            <input 
                type="text" 
                onChange={this.changeName} 
                value={this.state.pet.name} 
                required
                minLength="3"
            />
            {
                (this.state.errors.name) ? 
                <span className="error">&nbsp;{this.state.errors.name.message}</span> :
                <span></span>
            }
        </p>
        <p>
            Type:&nbsp;
            <input type="text" 
            onChange={this.changeType} 
            value={this.state.pet.type}
            required
            minLength="3"
             />
            {
                (this.state.errors.type) ? 
                <span className="error">&nbsp;{this.state.errors.type.message}</span> :
                <span></span>
            }
        </p>
        <p>
            Description:&nbsp;
            <input type="text" 
            onChange={this.changeDescription} 
            value={this.state.pet.description}
            required
            minLength="3"
             />
            {
                (this.state.errors.description) ? 
                <span className="error">&nbsp;{this.state.errors.description.message}</span> :
                <span></span>
            }
        </p>
       
        <h3>Skills:</h3>
            <p>
                <input type="text" onChange={this.changeSkillOne} value={this.state.pet.skillOne} />
            {
                (this.state.errors.skillOne) ? 
                <span className="error">&nbsp;{this.state.errors.skillOne.message}</span> :
                <span></span>
            }
            </p>
            <p>
                <input type="text" onChange={this.changeSkillTwo} value={this.state.pet.skillTwo} />
            {
                (this.state.errors.skillTwo) ? 
                <span className="error">&nbsp;{this.state.errors.skillTwo.message}</span> :
                <span></span>
            }
            </p>
            <p>
                <input type="text" onChange={this.changeSkillThree}  value={this.state.pet.skillThree} />
            {
                (this.state.errors.skillThree) ? 
                <span className="error">&nbsp;{this.state.errors.skillThree.message}</span> :
                <span></span>
            }
            </p>
        
            <button type="submit">Update</button>
                    <Link to={"/"}>
                        <button>Cancel</button>
                    </Link>
        </form>
    </div>
);
                
                    
                   

}}


export default EditPet;

//<button onClick={this.delete}>Delete Activity</button> 