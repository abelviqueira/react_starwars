import React from 'react'
import './SearchForm.css'

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="Enter a character's name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
      );
    }
  }

  export default SearchForm;