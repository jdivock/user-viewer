/* eslint no-param-reassign: 0 */
export const GET_USERS = 'GET_USERS';
export const UPDATE_USER = 'UPDATE_USER';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';

// TODO: use lib that has pending / success / fail states
// TODO: Check respones for non-200's
export const updateUser = user =>
  dispatch =>
    new Promise((resolve) => {
      const oReq = new XMLHttpRequest();

      oReq.addEventListener('load', function loadHandler() {
        const updatedUser = JSON.parse(this.response);
        dispatch({
          type    : UPDATE_USER,
          payload : ({
            id: updatedUser.id,
            firstName: updatedUser.first_name,
            lastName: updatedUser.last_name,
            email: updatedUser.email,
            address1: updatedUser.address1,
            address2: updatedUser.address2,
            phone: updatedUser.phone,
          }),
        });
        resolve();
      });
      oReq.open('PUT', `/api/users/${user.id}`);
      oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
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
  [UPDATE_USER] : (state, {payload}) => {
    payload.id = parseInt(payload.id, 10);
    const updatedIdx = state.findIndex(el => el.id === payload.id);
    return [
      ...state.slice(0, updatedIdx),
      payload,
      ...state.slice(updatedIdx + 1, state.length),
    ];
  },
  [DELETE_USER] : (state, {payload}) => {
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
