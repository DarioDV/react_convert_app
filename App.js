import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

class App extends Component {
state = {
      fahren: '',
      celsius: '',
      valcelsius:'',
      valfahren: ''
    };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value});
    const tempcelsius = (value-32)/1.80;
    this.setState({valcelsius: tempcelsius});
    this.setState({celsius: tempcelsius});
    
    //this.setState({[event.target.name]: event.target.value});
    //const tempC= this.state.Celsius;
    //const fahren = (tempC * 1.80) + 32;
    //this.setState({valfahren: fahren});
  }

  render() {
    return (
      <div>
      <h1 className="App"> Conversione da Fahrenheit a Celsius </h1>
      <Form/>
      </div>
    );
  }
}
export default App;