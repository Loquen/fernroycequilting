import React, { Component } from 'react';
import { Container, Jumbotron, Alert, Row, Col, Card } from 'react-bootstrap';
import Workshop from '../../components/Workshop/Workshop';
import { Header } from '../../components/helpers/Header';
import workshopService from '../../utils/workshopService';

class LecturePage extends Component {

  state = {
    workshops: [],
    show: false
  };

  async getAllWorkshops(show) {
    const workshops = await workshopService.getAll();

    this.setState({ workshops, show });
  }

  async componentDidMount() {
    this.getAllWorkshops(false);
  }

  handleDelete = async (e, id) => {
    await workshopService.deleteWorkshop(id);

    this.getAllWorkshops(true);
  }

  handleClose = () => {
    this.setState({show: false});
  }

  render(){
    return (
      <Container>
        <Header
          title={'LECTURES and WORKSHOPS'}
        />
        <Jumbotron>
          <p>
            Sewing is part of my DNA. I was drawn to textiles from a very early age and 
            learned to sew on a machine by age 10. I started quilting in 1995. I did not 
            use patterns, but rather taught myself to “look” – find the block; figure out 
            the construction. I studied books on Amish quilts, antique quilts, African 
            American quilts – any quilt books I could find. Those books included ones 
            by Gwen Marston. Years later I discovered her workshops and happily followed 
            her sharp left turn – I have been skipping down the Liberated Quilting pathway 
            ever since. With Gwen’s blessing I have been teaching students how to make 
            their own quilts using her liberated techniques since 2012.
          </p>
          <p>
            My quilt inspirations come from a sense of curiosity and questioning: What 
            if I did this? What if I added/subtracted that? Changed this? These 
            explorations gave me a sense of independence; allowed me to find my 
            own path or as Gwen Marston says, “make my own quilts.”
          </p>
          <p>
            My greatest joy as a teacher is sharing my love of liberated quilting 
            and empowering other quilters to create their own work and trust their 
            instincts, dispensing encouragement and tips along the way as they develop 
            and hone their quilting style. I consider myself a quilting doula – 
            encouraging and supporting my students as they birth their creative ideas. 
            It is a privilege to be part of this long tradition of women’s work.
          </p>
        </Jumbotron>

        <h1>Lectures</h1>
        <p>
          A trunk show of quilts with stories. Supplies needed: a podium, 
          microphone, table for quilts and 2 helpers to hold quilts.
        </p>
        <Row>
          <Col>
            <Card className='card-style'>
              <Card.Header>
                <h4><em>Following the Inspiration</em></h4>
              </Card.Header>
              <Card.Body>
                Where does a quilt idea come from and how does 
                it get from an idea to an actual quilt? Fern’s lecture and trunk show 
                describes the starting point (inspiration) of each of her quilts and the 
                path it took to completion, including the steps or missteps, quick gestation 
                or months/years long process.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-style'>
              <Card.Header>
                <h4><em>One Thing Leads to Another</em></h4>
              </Card.Header>
              <Card.Body>
                Improvisational quilting is an intuitive way of creating quilts. 
                Fern often starts her quilts by playing with scraps or an idea, 
                drawing a rough sketch or wondering: What if? In this lecture Fern 
                describes her quilting process and how each decision informs the 
                next, keeping her engaged, focused and often unsure of what 
                happens next.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-style'>
              <Card.Header>
                <h4><em>Confessions of a Whole Cloth Quilter</em></h4>
              </Card.Header>
              <Card.Body>
                How Fern found the Liberated Pathway. A trunk show illustrating Fern’s beginnings from a timid 
                quilter to a tiny piecer and all the influences along the way.
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <h3 className='text-justify'>
              Lectures only: $400
            </h3>
          </Col>
          <Col>
            <h3 className='text-justify'>
              Lectures/workshop combo: $975
            </h3>
          </Col>
        </Row>
        <br/>
        <Card className='card-style'>
          <Card.Header>
            <h5>Comment from AAQGO presentation:</h5> 
          </Card.Header>
          <Card.Body>
            <em>
              “I believe she inspired many to not be afraid to put pieces 
              together to form quilts no matter how big or small your scraps 
              of fabric tend to be cut. The idea is to not be afraid, but get 
              inspired.”
            </em>
          </Card.Body>
        </Card>
        <hr/>
        <h1>Workshops</h1>
        <div>
          <h4>
            <p>
              *****All of the classes below can be combined or expanded into 
              2-3 day workshops based on your group’s interest.
            </p>
            <p>
              I am available to teach at guilds, groups, retreats or shops. 
              Six hour classes are $600, plus travel expenses. Maximum students: 20
            </p>
            <hr/>
            <p>
              My classes are appropriate for confident beginners to advanced 
              quilters. Supply list to be sent with class request.
            </p>
          </h4>
        </div>
        <Alert show={this.state.show} onClose={this.handleClose} dismissible variant='success'>
          Workshop successfully deleted
        </Alert>
        {this.state.workshops.length > 0 ? 
          this.state.workshops.map((workshop, idx) => 
            <Workshop 
              key={idx}
              id={workshop._id}
              title={workshop.title}
              url={workshop.url}
              details={workshop.details}
              user={this.props.user}
              handleDelete={this.handleDelete}
            />
          )
          : <h3 className='text-danger'>No Workshops Currently Added</h3>
        }
        <div>
          <hr/>
          <h3 className='text-center'>What Students Are Saying...</h3>
          <br />
          <em><Row>
            <Col>
            <Card className='card-style'>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Fern’s classes are wonderfully energetic. She is a nurturing, 
                    supportive, knowledgeable and fun teacher.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">RH</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
            </Col>
            <Col>
              <Card className='card-style'>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      I took Fern’s String Quilt class. Her directions are really 
                      helpful. She guided us through choosing colors, explained how 
                      different widths of fabric make the block more interesting, 
                      and taught us to relax and have fun creating our quilt. She 
                      has tips and tricks and works well with students from every 
                      level of experience. I highly recommend her as a teacher.{' '}
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">LM</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='card-style'>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {' '}
                      I love taking quilting classes from Fern. She can work with 
                      students of any skill level and has infinite patience. She is 
                      a skilled quilter and provides classes that move beyond 
                      ‘traditional’ quilting.{' '}
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">KB</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row></em>
        </div>
      </Container>
    );
  }
}

export default LecturePage;