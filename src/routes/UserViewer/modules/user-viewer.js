export const GET_USERS = 'GET_USERS';


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
};

const ACTION_HANDLERS = {
  [GET_USERS] : (state, action) => action.payload,
};

const initialState = [];
export default function usersReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
