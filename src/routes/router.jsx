/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Orders from '../components/Orders';
import Shipping from '../components/Shipping';
import SignUp from '../components/SignUp';
import Root from '../layouts/Root';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/shipping',
        element: <PrivateRoute><Shipping /></PrivateRoute>,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
