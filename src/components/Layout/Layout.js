import React from "react";
import PropTypes from "prop-types";
import { Header } from "..";
import Footer from "../Footer/Footer";

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
