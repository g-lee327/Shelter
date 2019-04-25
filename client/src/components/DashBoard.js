import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class DashBoard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            pets: []
        }
    }
    
    componentDidMount = () => {
        axios.get("/pets")
            .then(res => {
                console.log(res);
                this.setState({pets: res.data.pets});
            }).catch(err => {
                console.log(err);
            });
    }
    

    render() {
        return (
            <fieldset>
                <Link to="/pet/new">Add a pet to the Shelter</Link>
                
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.pets.map( (pet, index)  => 
                                <tr key={index}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link 
                                            to={"/pet/" + pet._id + "/edit"}>
                                            <button>Edit</button>
                                        </Link>
                                        <Link 
                                            to={"/pet/" + pet._id + "/details"}>
                                            <button>Details</button>
                                        </Link>
                                    </td>
                                </tr>    
                            )
                        }
                        </tbody>
                    </table>
            </fieldset>


        )
    }



}
export default DashBoard;