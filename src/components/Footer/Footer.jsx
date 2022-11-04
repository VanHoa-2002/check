import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Footer.css";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
            <div>
              <div>
                <h1 className="text-white">MultiMark</h1>
              </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda consequuntur accusamus laudantium officiis, error
                pariatur vitae in magni? Dolore adipisci non veniam aliquam
                laboriosam praesentium id distinctio porro necessitatibus
                labore.
              </p>
            </div>
          </Col>
          <Col lg="3" className="mb-4" md='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="mb-4" md='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">UseFul Link</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy && Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='4' >
            <div className="footer__quick-links">
              <h4 className="quick__links-title footer__contact">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="icon__contact">
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123 , TanPhu, HCM</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="icon__contact">
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+ 152 255 3354</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span className="icon__contact">
                  <i class="ri-mail-line"></i>
                  </span>
                  <p>vnr@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0"></ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developer by Van Hoa. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
