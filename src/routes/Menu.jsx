import { Navbar, Nav, Form, Container, Button, Row, Col } from 'react-bootstrap';
import logo from './logo.png.webp';
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
export default function Menu() {
  return (
    <Fragment>
      <Container>
        <Row className='py-5'>
          <Col className='col-xl-3' >
            <Navbar.Brand href="/" className=''>
              <img src={logo} className="App-logo img-fluid" width={150} alt="logo" />
            </Navbar.Brand>
          </Col>
          <Col className='col-xl-6' >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
          </Col>
          <Col className='col-xl-3 d-flex ' >
            <Button variant="outline-danger d-block mx-auto px-3"><Nav.Link href="/sign-in" className='text-white'>Giriş yap</Nav.Link></Button>
            <Button variant="outline-dark d-block mx-auto px-3">Sepetim</Button>
          </Col>
        </Row>
      </Container>
      <Navbar bg="black" expand="xl">
        <Container >
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-white text-danger' />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto  my-lg-0 text-uppercase ">
              <Nav.Link href="/" className='text-white'>Home</Nav.Link>
              <Nav.Link href="/Kids" className='text-white'>ÇOCUK</Nav.Link>
              <Nav.Link href="/Roman" className='text-white'>ÇİZGİ ROMAN</Nav.Link>
              <Nav.Link href="/Kirtasiye" className='text-white'>HOBİ & KIRTASİYE</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
