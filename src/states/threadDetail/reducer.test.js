import threadDetailReducer from "./reducer";

describe("threadDetailReducer function", () => {
  it("should return null when given by unknown action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the thread when given by RECEIVE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "thread 1",
      category: "test",
      body: "thread 1 body",
      owner: {
        id: "user-1",
        name: "User 1",
      },
      comments: [],
      createdAt: "2023-05-29T07:55:52.266Z",
    };
    const action = {
      type: "RECEIVE_THREAD_DETAIL",
      payload: {
        threadDetail: {
          id: "thread-1",
          title: "thread 1",
          category: "test",
          body: "thread 1 body",
          owner: {
            id: "user-1",
            name: "User 1",
          },
          comments: [],
          createdAt: "2023-05-29T07:55:52.266Z",
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it("should return null when given by CLEAR_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "thread 1",
      category: "test",
      body: "thread 1 body",
      owner: {
        id: "user-1",
        name: "User 1",
      },
      comments: [],
      createdAt: "2023-05-29T07:55:52.266Z",
    };
    const action = {
      type: "CLEAR_THREAD_DETAIL",
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });

  it("should return thread and comments with new comment when given by ADD_COMMENT action", () => {
    // arrange
    const initialState = {
      id: "thread-1",
      title: "thread 1",
      category: "test",
      body: "thread 1 body",
      owner: {
        id: "user-1",
        name: "User 1",
      },
      comments: [],
      createdAt: "2023-05-29T07:55:52.266Z",
    };

    const action = {
      type: "ADD_COMMENT",
      payload: {
        comment: {
          id: "comment-1",
          content: "comment thread",
          owner: {
            id: "user-1",
            name: "User 1",
          },
          createdAt: "2023-05-29T07:59:04.689Z",
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // arrange
    expect(nextState).toEqual({
      ...initialState,
      comments: [...initialState.comments, action.payload.comment],
    });
  });
});
