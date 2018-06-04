import React from 'react';

class Form extends React.Component {
  render () {
    return ( 
    <div>

    <form>
        <label>
          Insert Fahrenheit : 
          <input type="number" name="fahren" value={this.props.fahren} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleChangeSubmitF}> Convert F° to C° </button><br />
        <label>
         Insert Celsius : 
          <input type="number" name="celsius" value={this.props.celsius} onChange={this.handleChange}/>
        </label>
        <button onClick={this.handleChangeSubmitC}> Convert C° to F° </button><br />
        <button onClick={this.handleClear}> Clear All </button>
    </form>
   
    </div>
    );
  }
}
export default Form;