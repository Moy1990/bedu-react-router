import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Header = () => <header className="header navbar">
  <div className="container grid-lg">
    <div className="columns">
      <div className="column col-12">
        <div className="navbar">
          <section className="navbar-section">
            <a href="#" className="navbar-brand mr-2 text-dark text-bold">React Shop</a>
            <a href="#" className="btn btn-link">Home</a>
            <a href="#" className="btn btn-link">Store</a>
          </section>
          <section className="navbar-section">
            <a href="#" className="btn btn-link text-dark">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
</header>;

export default Header;