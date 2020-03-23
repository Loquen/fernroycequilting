import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import contactService from '../../utils/contactService';

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
    // Call Service to send email 
    await contactService.sendEmail(this.state.name, this.state.email, this.state.subject, this.state.message)
    
    .then((response)=>{
      console.log(response);
      // if (response.data.status === 'success'){
      //   alert("Message Sent."); 
      //   this.resetForm()
      // }else if(response.data.status === 'fail'){
      //   alert("Message failed to send.")
      // }
    })
  }

  resetForm(){
     this.setState({
       name: '',
       email: '',
       subject: '',
       message: ''
     });
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.subject && this.state.message);
  }

  render() {
    return (
      <div>
      <p className='text-center'>Send me an email to schdule a lecture at your guild, local quilt store or just say hello!</p>
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
            <Button type='submit' className='btn btn-default' disabled={this.isFormInvalid()}>Say Hello</Button>&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default ContactForm;
