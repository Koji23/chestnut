import Loadable from 'react-loadable';
import Loading from '../shared/Loading';

const LoadableProfile = Loadable({
  loader: () => import('./Profile'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});

export default LoadableProfile;
