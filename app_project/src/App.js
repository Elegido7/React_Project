// src/App.js
import React from 'react';
import Description from './Component/Description';
import Bei from './Component/price';
import Picha from './Component/Image';
import Jina from './Component/name';

const firstName = 'Dennis';

const App = () => {
  return (
    <div className="App mx-5 mt-2">
      <div
        className="card text-center bg-secondary p-2 text-dark bg-opacity-25 rounded"
        style={{ width: '18rem' }}>
        < Picha />
        <div class="card-body">
          <h2 class="card-title fw-bold" style={{ color: 'purple' }}>
            <Jina />
          </h2>
          <p class="card-text text-wrap mt-4 lh-lg">
            <Description />
          </p>
          <button
            type="button"
            class="btn btn-outline-primary btn-md fs-3 mt-4 fw-semibold">
            <Bei />
          </button>
        </div>
      </div>
      <div className="mt-3 text-wrap text-success font-monospace w-5">
        {firstName ? (
          <h4>Hello, {firstName}! Your ordered Product</h4>
        ) : (
          <h5>Hello, there!</h5>
        )}
        {firstName && (
          <img
            src="https://xiaomi-store.co.ke/wp-content/uploads/2024/08/gtr-4.jpg"
            style={{ width: '250px', height: 'auto' }}
            alt="phone"
          />
        )}
      </div>
    </div>
  );
};

export default App;
