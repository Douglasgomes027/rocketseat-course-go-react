export const addUserRequest = (user, lat, lgt) => ({
  type: 'ADD_USER_REQUEST',
  payload: { user, lat, lgt },
});

export const addUserSuccess = data => ({
  type: 'ADD_USER_SUCCESS',
  payload: { data },
});

export const addUserError = () => ({
  type: 'ADD_USER_ERROR',
});

export const removeUser = id => ({
  type: 'REMOVE_USER',
  payload: { id },
});
