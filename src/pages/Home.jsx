import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";
import { useEffect } from "react";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
  const [trendingPrd, setTrendingPrd] = useState(products);
  const [bestSellPrd, setBestSellPrd] = useState(products);
  const [mobilePrd, setMobilePrd] = useState(products);
  const [wirelessPrd, setWirelessPrd] = useState(products);
  const [popularPrd, setPopularPrd] = useState(products);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filterBestSellProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingPrd(filterTrendingProducts);
    setBestSellPrd(filterBestSellProducts);
    setMobilePrd(filterMobileProducts);
    setWirelessPrd(filterWirelessProducts);
    setPopularPrd(filterPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalist & Mordern </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  quos perferendis vitae vel explicabo quia quam? Provident
                  rerum at eaque saepe incidunt aliquam exercitationem quo
                  voluptatem doloribus, necessitatibus perferendis explicabo!
                </p>
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingPrd} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best seller</h2>
            </Col>
            <ProductsList data={bestSellPrd} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-6 mb-3">Quality ArmChair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals mb-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobilePrd} />
            <ProductsList data={wirelessPrd} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularPrd} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
