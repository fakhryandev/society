import api from "../../utils/api";

const ActionType = {
  RECEIVE_LEADERBOARD: "RECEIVE_LEADERBOARD",
};

const receiveLeaderboardActionCreator = (leaderboard) => ({
  type: ActionType.RECEIVE_LEADERBOARD,
  payload: {
    leaderboard,
  },
});

const asyncReceiveLeaderboard = () => {
  return async (dispatch) => {
    try {
      const leaderboard = await api.getLeaderboard();
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (error) {
      alert(error.message);
    }
  };
};

export { ActionType, receiveLeaderboardActionCreator, asyncReceiveLeaderboard };
