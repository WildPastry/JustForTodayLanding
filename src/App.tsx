import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routesConfig from './routes/Routes';

const App: React.FC = (): JSX.Element => {
  const router = createBrowserRouter(routesConfig);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default App;
