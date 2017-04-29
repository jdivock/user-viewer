import { connect } from 'react-redux';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../modules/user-viewer';

import UserViewer from '../components/UserViewer';

const mapDispatchToProps = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};

const mapStateToProps = state => ({
  users : state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserViewer);
