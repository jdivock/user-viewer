export const GET_USERS = 'GET_USERS';


export const getUsers = () =>
  dispatch =>
    new Promise((resolve) => {
      const oReq = new XMLHttpRequest();

      oReq.addEventListener('load', function loadHandler() {
        dispatch({
          type    : GET_USERS,
          payload : JSON.parse(this.response),
        });
      });
      oReq.open('GET', '/api/users');
      oReq.send();

      resolve();
    });

export const actions = {
  getUsers,
};

const ACTION_HANDLERS = {
  [GET_USERS] : (state, action) => action.payload,
};

const initialState = [];
export default function usersReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
