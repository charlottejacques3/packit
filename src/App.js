import React, {Component} from 'react';
import { useState } from 'react';

import './App.css';
import Form from './Form'
import Fetch from './Fetch'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "",
      formSubmitted: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted!");
    const formData = new FormData (event.target);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    this.setState({
      apiUrl: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=metric&include=days&key=LR9FZM68C2LQX5B8SUT84J6QK&contentType=json",
      formSubmitted: true,
    });
  }

  render() {

    let content;
    if (this.state.formSubmitted) {
      content = <Fetch url={this.state.apiUrl}/>;
    }  else {
      content = (
        <form onSubmit={this.handleSubmit}>
            <label>Trip Name: </label>
            <input type="text" name="tripName"/>
            <br/>

            <label>Dates: </label>
            <input type="date" name="startDate"/>
             - 
            <input type="date" name="endDate"/>
            <br/>

            <label>Location: </label>
            <input type="text" name="location"/>
            <br/>
            
            <button type="submit">Submit</button>
          </form>
      );
    }

    return (
      <div className="App">
          <h1>PackIt</h1>
          { content }
      </div>
    );
  }
}

export default App;