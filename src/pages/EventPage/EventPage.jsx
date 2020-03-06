import React, { Component } from 'react';
import { Container, Jumbotron, Alert } from 'react-bootstrap';
import eventService from '../../utils/eventService';
import Event from '../../components/Event/Event';

class EventPage extends Component {

  state = {
    events: [],
    show: false
  }

  async getAllEvents(show) {
    const events = await eventService.getAll();

    this.setState({
      events,
      show
    });
  }

  componentDidMount() {
    this.getAllEvents(false);
  }

  handleDelete = (e, id) => {
    eventService.deleteEvent(id);

    this.getAllEvents(true);
  }

  render(){
    return (
      <Container>
        <Jumbotron>
          <h1 className='title'>Events!</h1>
        </Jumbotron>
        <Alert show={this.state.show} variant='success'>
          Event successfully deleted
        </Alert>
        {this.state.events.map((event, idx) => 
          <Event 
            key={idx}
            id={event._id}
            name={event.name}
            url={event.url}
            date={event.date}
            location={event.location}
            details={event.details}
            user={this.props.user}
            handleDelete={this.handleDelete}
          />
        )}
      </Container>
    );
  }
}

export default EventPage;