import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => (
  <>
    <Header />
    <main className="main bg-gray">
      <div className="container grid-lg">
        {children}
      </div>
    </main>
    <Footer />
  </>
);

export default BaseLayout;
