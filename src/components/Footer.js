import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => <footer className="footer">
  <div className="container grid-lg">
    <div className="columns">
      <div className="column col-lg-auto col-6">
        <Link to="/" className="navbar-brand mr-2 text-dark text-bold">React Shop</Link>
      </div>
      <div className="column text-right">Copyright &copy; 2019 @ React Shop Ltd</div>
    </div>
  </div>
</footer>;

export default Footer;