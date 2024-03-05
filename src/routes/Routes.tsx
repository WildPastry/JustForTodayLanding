import Layout from '../pages/Layout';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

const routesConfig = [
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  }
];

export default routesConfig;
