import React from 'react';
import Card from '../components/Card';

const products = Array.from('x'.repeat(24));
const StorePage = () => (
  <>
    <div className="container grid-container grid-lg p-2">
      {products.map(product => <Card
        title="Converse"
        description="This is a product description"
        price="450" />)}
    </div>
  </>
);

export default StorePage;
