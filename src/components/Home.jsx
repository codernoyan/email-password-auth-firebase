/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1 className="text-xl font-medium">
        this is home for
        {' '}
        {user?.email}
      </h1>
    </div>
  );
}

export default Home;
