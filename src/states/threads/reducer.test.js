import threadsReducer from "./reducer";

/**
 * - test scenario for threadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with new thread when given by ADD_THREAD action
 */

describe("threadReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            id: "thread-1",
            title: "title thread 1",
            body: "body thread 1",
            category: "test",
            ownerId: "user-1",
            totalComments: 0,
            createdAt: "2023-05-29T07:55:52.266Z",
          },
          {
            id: "thread-2",
            title: "title thread 2",
            body: "body thread 2",
            category: "test",
            ownerId: "user-2",
            totalComments: 10,
            createdAt: "2023-06-29T07:55:52.266Z",
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with new thread when given by ADD_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "title thread 1",
        body: "body thread 1",
        category: "test",
        ownerId: "user-1",
        totalComments: 0,
        createdAt: "2023-05-29T07:55:52.266Z",
      },
      {
        id: "thread-2",
        title: "title thread 2",
        body: "body thread 2",
        category: "test",
        ownerId: "user-2",
        totalComments: 10,
        createdAt: "2023-06-29T07:55:52.266Z",
      },
    ];

    const action = {
      type: "ADD_THREAD",
      payload: {
        thread: {
          id: "thread-3",
          title: "title thread 3",
          body: "body thread 3",
          category: "test",
          ownerId: "user-2",
          totalComments: 0,
          createdAt: "2023-07-01T07:55:52.266Z",
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // arrange
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
