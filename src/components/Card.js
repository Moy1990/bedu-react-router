import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, price, description }) => (
  <div className="card">
    <div className="card-image">
      <img
        src="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        className="img-responsive"
        alt="Product" />
    </div>
    <div className="card-header">
      <div className="card-title h5">{title}</div>
      <div className="card-subtitle text-gray">${price} MXN</div>
    </div>
    <div className="card-body">
      {description}
    </div>
    <div className="card-footer">
      <Link to="/basket" className="btn btn-block btn-primary">Buy</Link>
    </div>
  </div>
);

export default Card;
