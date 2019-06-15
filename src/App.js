import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// BrowserRouter: Subclass of Router. Use of HTML5 history API to sync your UI with the current browser
// HashRouter: Previose router but only uses hash part of the URL.
// MemoryRouter
// NativerRouter: Used for routing inside React-native mobile apps.
// StaticRouter: Used for static routing just like React Router v3.
import BaseLayout from './layouts/BaseLayout';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';

const App = () => (
  <>
    <Router>
      <BaseLayout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/basket" component={BasketPage} />
      </BaseLayout>
    </Router>
  </>
)

// Route properties
// path: string, path to be matched
// component: Component to render
// exact: exactly match the path
// render: element React
// children

export default App;
