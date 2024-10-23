import React from 'react';
import Stock from '../product';

const Picha = () => {
  return (
    <div>
      <img
        className="rounded-circle"
        src={Stock.imageUrl}
        alt={Stock.name}
        style={{ width: '150px' }}
      />
    </div>
  );
};

export default Picha;
