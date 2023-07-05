import api from "../../utils/api";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});

const asyncRegisterUser = ({ name, email, password }) => {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
};

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
