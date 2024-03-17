import Layout from '../pages/Layout/Layout';
import Privacy from '../pages/Privacy/Privacy';
import Support from '../pages/Support/Support';
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
