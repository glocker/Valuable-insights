import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/button';
import 'styles/header.css';

// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png
// eslint-disable-next-line no-unused-vars
const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings header-container flex items-center">
    <nav>
        <Button to="/Integrations">Integrations</Button>
        <Button to="/">
            Core Platform
            <i className="arrow down" />
        </Button>
        <Button to="/">
            Company
            <i className="arrow down" />
        </Button>
        <Button to="/">
            Resources
            <i className="arrow down" />
        </Button>
    </nav>
    <Button >Contact Sales</Button>
    <Button className="rounded-full header-button-demo">Book a Demo</Button>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
