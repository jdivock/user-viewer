export const GET_USERS = 'GET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const updateUser = user =>
  dispatch =>
    new Promise((resolve) => {
      const oReq = new XMLHttpRequest();

      oReq.addEventListener('load', function loadHandler() {
        console.log(this.response);
        dispatch({
          type    : UPDATE_USER,
        });
        resolve();
      });
      oReq.open('PUT', `/api/users/${user.id}`);
      oReq.send(JSON.stringify(user));
    });

export const deleteUser = id =>
  dispatch =>
    new Promise((resolve) => {
      const oReq = new XMLHttpRequest();

      oReq.addEventListener('load', function loadHandler() {
        console.log(this.response);
        dispatch({
          type    : DELETE_USER,
          payload: { id },
        });
        resolve();
      });
      oReq.open('DELETE', `/api/users/${id}`);
      oReq.send();
    });

export const createUser = user =>
  dispatch =>
    new Promise((resolve) => {
      const oReq = new XMLHttpRequest();

      oReq.addEventListener('load', function loadHandler() {
        dispatch({
          type    : CREATE_USER,
          payload : JSON.parse(this.response).map(user => ({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            address1: user.address1,
            address2: user.address2,
            phone: user.phone,
          })),
        });
        resolve();
      });
      oReq.open('POST', '/api/users');
      oReq.send(JSON.stringify(user));
    });


export const getUsers = () =>
  dispatch =>
    new Promise((resolve) => {
      const oReq = new XMLHttpRequest();

      oReq.addEventListener('load', function loadHandler() {
        dispatch({
          type    : GET_USERS,
          payload : JSON.parse(this.response).map(user => ({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            address1: user.address1,
            address2: user.address2,
            phone: user.phone,
          })),
        });
        resolve();
      });
      oReq.open('GET', '/api/users');
      oReq.send();
    });

export const actions = {
  getUsers,
  updateUser,
  deleteUser,
  createUser,
};

const ACTION_HANDLERS = {
  [GET_USERS] : (state, action) => action.payload,
  [UPDATE_USER] : state => state,
  [DELETE_USER] : (state, { payload }) => {
    const delIdx = state.findIndex(el => el.id === payload.id);
    return [...state.slice(0, delIdx), ...state.slice(delIdx + 1, state.length)];
  },
  [CREATE_USER] : (state, action) => action.payload,
};

const initialState = [];
export default function usersReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
