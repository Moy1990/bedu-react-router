import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

const HomePage = () => (
  <>
    <Hero />
    <div className="container grid-container grid-lg p-2">
      <Card
        title="Converse"
        description="This is a product description"
        price="450" />
      <Card
        title="Converse"
        description="This is a product description"
        price="450" />
      <Card
        title="Converse"
        description="This is a product description"
        price="450" />
      <Card
        title="Converse"
        description="This is a product description"
        price="450" />
      <Card
        title="Converse"
        description="This is a product description"
        price="450" />
      <Card
        title="Converse"
        description="This is a product description"
        price="450" />
    </div>
    <section className="section-info pb-2">
      <div className="container grid-lg">
        <div className="card p-2">
          <div className="card-body">
            <h2 className="text-center text-bold">¡Compra en React Shop ahora!</h2>
            <p className="text-center p-0 m-0">
              <button className="btn btn-primary">Ir a la tienda</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;