/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
  return (
    <div>
      <h3>This is order page</h3>
      <p>Your products in on the way.</p>
      <Link className="underline decoration-sky-400 decoration-2" to="/shipping">Go to Shipping</Link>
    </div>
  );
}

export default Orders;
