import React, { Component } from 'react';
import './App.css';
import "react-router";
import { BrowserRouter, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import NewPetForm from './components/NewPetForm';
import EditPet from './components/EditPet';
import PetDetail from './components/PetDetail';

class App extends Component {
  render() {
  return (
    <div className="jumbotron" >
      <h1> Pet Shelter </h1>
      
      

      <BrowserRouter>
        <Route exact path= "/" component={DashBoard} />
        <Route path="/pet/new" component={NewPetForm} />
        <Route path="/pet/:_id/edit" component={EditPet} />
        <Route path="/pet/:_id/details" component={PetDetail} />
      </BrowserRouter>

    </div>
  );
}
}

export default App;
