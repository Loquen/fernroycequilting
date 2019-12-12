import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Fern Royce Quilting!</h1>
      </Jumbotron>

      <div>
        <h1>About Me</h1>
        <p>
        I was born and raised in Northern California, surrounded by sewing, textiles and quilts.
        </p>
        <img src="https://placebear.com/g/300/300" alt="place bear"/>
        <p>
          When I was very young we lived with my maternal grandparents in Paradise, CA. 
          It was there that I got my first peek into my grandmother’s sewing room – filled 
          to the ceiling with boxes and tins of fabrics, buttons and notions.
        </p>
        <p>
          That same grandmother bought me and my sisters a treadle sewing machine
          for $12.50 when I was 10 and I’ve been sewing ever since – although now 
          I use an electric sewing machine.
        </p>
        <p>
          My sisters will be the first to tell you that, as much as I loved fabric, 
          I had a very difficult time cutting into it. My younger sister did not 
          suffer from that hesitation – she would be wearing her new outfit while 
          I was still “petting” my fabric. She, of course, thinks it’s quite funny 
          that I now cut up fabric as a living!
        </p>
        <p>
          I took my first quilting class in 1995 at New Pieces in Berkeley with 
          Johyne Geran. One of her opening statements was “Once you start quilting 
          you won’t be able to stop”….. I was skeptical but she was right.
        </p>
        <p>
          Many more classes followed that first one with such quilting notables 
          as Roberta Horton, Mary Mashuta and Freddy Moran. Best of all, I was 
          able to take those classes without leaving town!
        </p>
        <p>
          Early in my quilting career I found Gwen Marston’s books and followed 
          her sharp left turn onto the Liberated Quilting path. I am grateful 
          that I was able to attend the last two years of her 30 years of Beaver 
          Island Retreats in Michigan. She is my biggest inspiration.
        </p>
        <p>
          Here I am, 21 years later, still quilting, still cutting up fabric 
          and now teaching others to do the same! I hope that I can inspire and 
          encourage my students as much as my teachers inspired me. It is an 
          honor to be part of and carrying forward the long tradition of quiltmaking.
        </p>
      </div>
      <div>
        {/* <Link className='btn btn-default' to='/settings'>Subscribe!</Link> */}
        <Link className='btn btn-default' to='/contact'>Contact Me!</Link>
        <Link className='btn btn-default' to='/event'>Events!</Link>
        <Link className='btn btn-default' to='/lecture'>Lectures!</Link>
      </div>
    </Container>
  );
}

export default AboutPage;