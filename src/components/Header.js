import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => <header className="header navbar">
  <div className="container grid-lg">
    <div className="columns">
      <div className="column col-12">
        <div className="navbar">
          <section className="navbar-section">
            <Link to="/" className="navbar-brand mr-2 text-dark text-bold">React Shop</ Link>
            <Link to="/" className="btn btn-link">Home</Link>
            <Link to="/store" className="btn btn-link">Store</Link>
          </section>
          <section className="navbar-section">
            <Link to="/basket" className="btn btn-link text-dark">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Link>
          </section>
        </div>
      </div>
    </div>
  </div>
</header>;

export default Header;