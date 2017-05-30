import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from "./myForm.js";
import Button from "./button.js"


class App extends Component {
     constructor(props){
        super(props);
        this.state = {
            name: "",
            email: ""
        }
        this.saveNameToState = this.saveNameToState.bind(this);
        this.saveEmailToState = this.saveEmailToState.bind(this);
        this.clearButton = this.clearButton.bind(this);
     }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MyForm saveNameToState={this.saveNameToState}
                saveEmailToState={this.saveEmailToState}
                name={this.state.name}
                email={this.state.email}/>
        
        <Button clearButton={this.clearButton}/>
      </div>
    );
  }
    
    saveNameToState(event){
        let name = event.target.value;
        this.setState({
            name: name
        });
        
    }
    
    saveEmailToState(event){
        let email = event.target.value;
        this.setState({
            email: email
        });
    } 
    
    clearButton(){
        this.setState({
            name: '',
            email: ''
        });
    }
}

export default App;
