import { connect } from 'react-redux';
import { getUsers } from '../modules/user-viewer';

import UserViewer from '../components/UserViewer';

const mapDispatchToProps = {
  getUsers,
};

const mapStateToProps = state => ({
  users : state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserViewer);
