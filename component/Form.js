import React from 'react';

class Form extends React.Component {
  render () {
    return ( 
    <div>

    <form>
      
      <div>
        <label>
          Insert Fahrenheit : 
        </label>
        <input type="number" size="64" maxLength="64" name="fahren" value={this.props.fahren} onChange={this.props.onChange} />
        <button onClick={this.props.submitF}> Convert F° to C° </button><br /><br />
      </div>

      <div>
        <label>
         Insert Celsius :  
        </label>
        <input type="number" size="64" maxLength="64" name="celsius" value={this.props.celsius} onChange={this.props.onChange} />
        <button onClick={this.props.submitC}> Convert C° to F° </button><br /><br />
      </div>

        <button onClick={this.props.clear}> Clear All </button>
    </form>

    </div>
    );
  }
}
export default Form;