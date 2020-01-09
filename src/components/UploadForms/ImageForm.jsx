import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import imageService from '../../utils/imageService';

class ImageForm extends Component {

  state = {
    url: '',
    category: '',
    name: '',
    show: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await imageService.create(
      this.state.url, 
      this.state.category,
      this.state.name
    );
    this.setState({show: true})
  }

  isFormInvalid() {
    return !(this.state.url && this.state.category && this.state.name);
  }

  render(){
    return (
      <>
        <header><h1 className='title'>Create A New Image</h1></header>
        <Alert show={this.state.show} variant='success'>
          Image successfully uploaded
        </Alert>
        <Container>        
          <form className='form-horizontal' onSubmit={this.handleSubmit} >
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
                  placeholder='Category' 
                  value={this.state.category} 
                  name='category' 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
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

export default ImageForm;