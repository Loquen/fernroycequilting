import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import eventService from '../../utils/eventService';
import Event from '../../components/Event/Event';

class EventPage extends Component {

  state = {
    events: []
  }

  async componentDidMount() {
    const events = await eventService.getAll();

    this.setState({
      events
    })
  }

  render(){
    return (
      <Container>
        <Jumbotron>
          <h1>Events!</h1>
        </Jumbotron>
        
        {this.state.events.map((event, idx) => 
          <Event 
            key={idx}
            name={event.name}
            url={event.url}
            date={event.date}
            location={event.location}
            details={event.details}
          />
        )}
      </Container>
    );
  }
}

export default EventPage;