import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

/* eslint-disable react/react-in-jsx-scope */
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
