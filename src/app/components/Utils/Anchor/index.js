import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LinkButton = ({ text, to, ...props }) => (
  <Button {...props}>
    <Link to={to}>{text}</Link>
  </Button>
);

LinkButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired
};

LinkButton.defaultProps = {
  to: null
};

export default LinkButton;
