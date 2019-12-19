import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SubscribeForm extends Component {

  state = {
    name: '',
    email: ''
  };

  handleChange = (e) => {
    // this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.name);
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email);
  }

  render() {
    return (
      <form className='form-horizontal' onSubmit={this.handleSubmit} >
        <h4 className='title'><strong>Subscribe to my updates!</strong></h4>
        <div className='form-group'>
          <div className='col-sm-12'>
            <input type='text' className='form-control' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange} />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-sm-12'>
            <input type='email' className='form-control' placeholder='Email' value={this.state.email} name='email' onChange={this.handleChange} />
          </div>
        </div>
        <div className='form-group'>
          <div className='col-sm-12 text-center'>
            <Button type='submit' className='btn btn-default' disabled={this.isFormInvalid()}>Subscribe!</Button>&nbsp;&nbsp;
          </div>
        </div>
      </form>
    );
  }
}

export default SubscribeForm;
