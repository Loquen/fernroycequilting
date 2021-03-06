import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import eventService from '../../utils/eventService';

class EventForm extends Component {

  state = {
    name: '',
    url: '',
    date: '',
    time: '',
    location: '',
    details: '',
    show: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await eventService.create(
      this.state.name, 
      this.state.url, 
      this.state.date,
      this.state.time,
      this.state.location,
      this.state.details
    );
    this.setState({
      show: true,
      name: '',
      url: '',
      date: '',
      time: '',
      location: '',
      details: ''
    })
  }

  isFormInvalid() {
    return !(
      this.state.name && 
      this.state.url && 
      this.state.date && 
      this.state.time && 
      this.state.location && 
      this.state.details
    );
  }

  handleClose = () => {
    this.setState({show: false});
  }

  render(){
    return (
      <>
        <header><h1 className='title'>Create A New Event</h1></header>
        <Alert show={this.state.show} onClose={this.handleClose} dismissible variant='success'>
          Event successfully uploaded
        </Alert>
        <Container>        
          <form className='form-horizontal' onSubmit={this.handleSubmit} >
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Name' 
                  value={this.state.name} 
                  name='name' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Image File Name' 
                  value={this.state.url} 
                  name='url' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='date' 
                  className='form-control' 
                  placeholder='Date' 
                  value={this.state.date} 
                  name='date' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='time' 
                  className='form-control' 
                  placeholder='Time' 
                  value={this.state.time} 
                  name='time' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Location/Address' 
                  value={this.state.location} 
                  name='location' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Description' 
                  value={this.state.details} 
                  name='details' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12 text-center'>
                <Button 
                  className='btn btn-default' 
                  type='submit' 
                  disabled={this.isFormInvalid()}
                >
                  Upload
                </Button>&nbsp;&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
              </div>
            </div>
          </form>
        </Container>
      </>
    );
  }
}

export default EventForm;