import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
 
    formSubmit = (e) => {
      e.preventDefault();
      const option = e.target.username.value.trim();
      const error = this.props.handleAddOpions(option);
      this.setState(() => ({ error: error }));
      if (!error) {
        e.target.username.value = ' ';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
          <form onSubmit={this.formSubmit} className='add-option'>
            <input type="text" name="username" className='add-option__input' />
            <button className='button'>Add Option</button>
          </form>
        </div>
      );
    }
  }