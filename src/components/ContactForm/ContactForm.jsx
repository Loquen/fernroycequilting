import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class ContactForm extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log(this.state.email, this.state.name, this.state.subject, this.state.message);
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.subject && this.state.message);
  }

  render() {
    return (
      <div>
        <Container>
          <form className='form-horizontal' onSubmit={this.handleSubmit} >
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
              <div className='col-sm-12'>
                <input type='text' className='form-control' placeholder='Subject' value={this.state.subject} name='subject' onChange={this.handleChange} />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <textarea className='form-control' placeholder='Your message...' value={this.state.message} name='message' onChange={this.handleChange} />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12 text-center'>
                <button className='btn btn-default' disabled={this.isFormInvalid()}>Say Hello</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
              </div>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default ContactForm;
