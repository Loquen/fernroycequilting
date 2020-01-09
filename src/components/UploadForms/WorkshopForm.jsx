import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import workshopService from '../../utils/workshopService';

class WorkshopForm extends Component {

  state = {
    title: '',
    url: '',
    image_text: '',
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
    await workshopService.create(
      this.state.title, 
      this.state.url, 
      this.state.image_text,
      this.state.details
    );
    this.setState({
      show: true,
      title: '',
      url: '',
      image_text: '',
      details: ''
    })
  }

  isFormInvalid() {
    return !(this.state.title && this.state.url && this.state.image_text && this.state.details);
  }

  render(){
    return (
      <>
        <header><h1 className='title'>Create A New Workshop</h1></header>
        <Alert show={this.state.show} variant='success'>
          Workshop successfully uploaded
        </Alert>
        <Container>        
          <form className='form-horizontal' onSubmit={this.handleSubmit} >
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Title' 
                  value={this.state.title} 
                  name='title' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Image URL'
                  value={this.state.url} 
                  name='url' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-sm-12'>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Image Blurb' 
                  value={this.state.image_text} 
                  name='image_text' 
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

export default WorkshopForm;