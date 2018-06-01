import React from 'react';

class Form extends React.Component {
  render () {
    return (
    <div>
       <form>
        <label>
          Gradi Fahrenheit: 
          <input type="number" name="fahren" value={this.state.fahren} onChange={this.handleChange} />
        </label>
        <label>
          Gradi Celsius: 
          <input type="number" name="celsius" value={this.state.celsius} onChange={this.handleChange} />
        </label>
      </form>
    </div>
    )
  }
}
export default Form;