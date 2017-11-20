import Loadable from 'react-loadable';
import Loading from '../shared/Loading';

const LoadableDashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});

export default LoadableDashboard;
