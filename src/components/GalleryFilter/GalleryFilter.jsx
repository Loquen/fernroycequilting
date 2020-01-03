import React, { Component } from 'react';

class GalleryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Your category: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose a Category:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='all'>All Images</option>
            {this.props.categories.map(category => 
              <option value={category.toLowerCase()}>{category}</option>
            )}
          </select>
        </label>
        <input type='submit' value='Submit' />
    </form>
    );
  }
}

export default GalleryFilter;