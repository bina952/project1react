import { Navbar, NavLink, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import elogo from "./elogo.png"
import laptop from "./laptop.jpeg"
const Navigationbar = () => {
  return (

    <>


      <Navbar bg="dark" variant="dark">


        <img src={elogo} alt="this is elogo" />

        <Container>


          <Nav className="ms-auto">


            <Nav.Link eventKey="1" as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to={"/contact"}>Contact</Nav.Link>


          </Nav>


        </Container>


      </Navbar>

      <div className="semo">
        <div className="design">
          <br />
          <h2>Learn Design</h2>

          <p>Hello,I'm Bina from Gaighat and for the last year I have done videos,tutorials and work in design development.</p>

          <p>I noticed programmars often have difficulty with the design for for a website of application.Functionality come first and design is left in the dust.</p>
          <p>There is no trick to design its just a number of rules and guidelines to learn and follow jsut like any class or object oriented function.</p>
          <br />
          <button type="read more" class="btn btn-primary">Read More</button>


        </div>

        <img src={laptop} alt="this is laptop" />

        <h2>Design for Developers</h2>

        <p>Learn how to enhance your websites</p>

       
      </div>

      <div className="test">
        <h2>Testimonials</h2>
        <p>What other people are saying</p>
        <div className="testimonals">
          <div className="media">
          <p>"Adrian is skilled in both development and design.He has done videos for the Traversy media channel on various topics and even created a mockup of a re-design for the websites."</p>
          <h3>Traversy Media</h3>
        </div>

          <div className="web">
            <p>"Adrian is one of the most well spoken people I know.His ability to distill complex topics into easy to understand parts makes learning easy and fun.On top of that his design skills are so good."</p>
            <h3>Web Dev Simplified</h3>
          </div>

          <div className="deved">
            <p>"It's very hard these days to find someones who understands both the technical side of development just as well as the UI/UX aspect.Adrian is one of them,he's a great person to learn from!".</p>
            <h3>DevEd</h3>
          </div>
        </div>

      </div>

<footer className="copyright">
  <p>Copyright 2022 All Rights Reserved Company Name</p>
</footer>
    </>



  );
}
export default Navigationbar;