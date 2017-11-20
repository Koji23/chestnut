import Loadable from 'react-loadable';
import Loading from '../shared/Loading';

const LoadableKanban = Loadable({
  loader: () => import('./Kanban'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});

export default LoadableKanban;
