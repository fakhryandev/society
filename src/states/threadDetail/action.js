import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  ADD_COMMENT: "ADD_COMMENT",
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const asyncReceiveThreadDetail = (threadId) => {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);

      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
  };
};

const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment,
  },
});

const asyncAddComment = ({ content, commentTo }) => {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ content, commentTo });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
};

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  asyncAddComment,
};
