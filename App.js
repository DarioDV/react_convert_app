import React, { Component } from 'react';
import './App.css';
import Form from './component/Form.js';

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
    console.log({value});
    this.setState({[name]: value});
  }

  handleChangeSubmitF = (event) => {
    event.preventDefault();
    const temp = this.state.fahren;
    const tempcelsius = (temp-32)/1.80;
    this.setState({ valcelsius: tempcelsius});
  }

  handleChangeSubmitC = (event) => {
    event.preventDefault();
    const temp = this.state.celsius;
    const tempfahren = (temp*1.80) + 32 ;
    this.setState({ valfahren: tempfahren});
  }
  handleClear = (event) => {
    event.preventDefault();
    this.setState({ fahren: '', celsius: '', valcelsius:'', valfahren: ''});
  }
  render() {
    
    return (
    <div className="App">
      <h1 className="App-header"> This app convert <br /> Fahrenheit to Celsius <br />Celsius to Fahrenheit  </h1>
     
      <Form fahren={this.state.fahren} celsius={this.state.celsius} onChange={this.handleChange} submitF={this.handleChangeSubmitF} submitC={this.handleChangeSubmitC} clear={this.handleClear} /> 
      <p>Converted value F° to C° <p className="App-p">{this.state.valcelsius} </p><br /> 
        Converted value F° to C° <p className="App-p">{this.state.valfahren}<br/></p> </p>
        {this.state.valcelsius > 100 &&
          <h2>
          a Napoli bolle l'acqua.. 
          </h2>
        }
    </div>
    );
  }
}
export default App;