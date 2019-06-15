import React from 'react';

const BasketPage = () => (
  <>
    <div className="container grid-lg p-2">
      <h2>Basket</h2>
      <section className="section-items">
        <div class="tile tile-centered">
          <div class="tile-icon">
            <div class="example-tile-icon">
              <img src="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" width="120" alt="converse" />
            </div>
          </div>
          <div class="tile-content ml-2">
            <div class="tile-title">Converse</div>
            <small class="tile-subtitle text-gray">$ 450</small>
          </div>
          <div class="tile-action">
            <button class="btn btn-link">
              <i class="icon icon-more-vert"></i>
            </button>
          </div>
        </div>
        <div class="tile tile-centered">
          <div class="tile-icon">
            <div class="example-tile-icon">
              <img src="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" width="120" alt="converse" />
            </div>
          </div>
          <div class="tile-content ml-2">
            <div class="tile-title">Converse</div>
            <small class="tile-subtitle text-gray">$ 450</small>
          </div>
          <div class="tile-action">
            <button class="btn btn-link">
              <i class="icon icon-more-vert"></i>
            </button>
          </div>
        </div>
        <div class="tile tile-centered">
          <div class="tile-icon">
            <div class="example-tile-icon">
              <img src="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" width="120" alt="converse" />
            </div>
          </div>
          <div class="tile-content ml-2">
            <div class="tile-title">Converse</div>
            <small class="tile-subtitle text-gray">$ 450</small>
          </div>
          <div class="tile-action">
            <button class="btn btn-link">
              <i class="icon icon-more-vert"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default BasketPage;
