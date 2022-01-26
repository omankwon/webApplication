import logo from './logo.svg';
import './App.css';
import { Navbar,Container,Nav,NavDropdown,Button,Card } from 'react-bootstrap';
import {useState} from 'react';
import img_off from './light_off.png';
import img_on from './light_on.png';

function App() {

  let [whoes, whoesChange] = useState(['My','Parents','Bath','Child']);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Smart Home Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {
        whoes.map((a,i)=>{
          return <Room whoes={whoes[i]}></Room>
        })
      }

    </div>
  );
}

function Room(props){
  let [Switching,switchingChange] = useState(false);
  return (
    <div style={{ display: "inline-block"}}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.whoes} Room</Card.Title>
          <Card.Text style={{ marginTop: '10px', marginBottom: '0' }}>
            Push the switch below if you want to turn the light on / off
          </Card.Text>
          <div style={{ padding: '20px' }}>
            {
              Switching === true
              ? <img src={img_off} style={{ width: '60%' }}/>
              : <img src={img_on} style={{ width: '60%' }}/>
            }
          </div>
          <Button variant="outline-primary" onClick={()=>{switchingChange(!Switching)}}>Switch</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;
