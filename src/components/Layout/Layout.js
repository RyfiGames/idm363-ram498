import React from "react";
import PropTypes from "prop-types";
import { Header } from "..";

const Layout = (props) => (
  <>
    <Header />
    {props.children}
  </>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
