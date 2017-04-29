import CoreLayout from '../layouts/CoreLayout';
import UserViewer from './UserViewer';

export const createRoutes = () => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : UserViewer,
});

export default createRoutes;
