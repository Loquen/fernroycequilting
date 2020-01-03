import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

class EventForm extends Component {

  state = {
    name: '',
    url: '',
    date: '',
    location: '',
    details: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    
  }

  render(){
    return (
      <div>
        <header><h1>Create A New Event</h1></header>
          <Container>        
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <div className="col-sm-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    value={this.state.name} 
                    name="name" 
                    onChange={this.handleChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Image URL" 
                    value={this.state.url} 
                    name="url" 
                    onChange={this.handleChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Date" 
                    value={this.state.date} 
                    name="date" 
                    onChange={this.handleChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Location/Address" 
                    value={this.state.location} 
                    name="location" 
                    onChange={this.handleChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Description" 
                    value={this.state.details} 
                    name="details" 
                    onChange={this.handleChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12 text-center">
                  <Button className="btn btn-default">Upload</Button>&nbsp;&nbsp;&nbsp;
                  <Link to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </Container>
      </div>
    );
  }
}

export default EventForm;