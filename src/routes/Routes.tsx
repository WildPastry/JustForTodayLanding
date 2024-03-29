import Layout from '../pages/Layout';
import Privacy from '../pages/Privacy';
import Support from '../pages/Support';
import Terms from '../pages/Terms';

const routesConfig = [
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/support',
    element: <Support />
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
