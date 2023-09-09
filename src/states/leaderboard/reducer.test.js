import leaderboardReducer from "./reducer";

describe("leaderboardReducer function", () => {
  it("should return initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the leaderboard when given by RECEIVE_LEADERBOARD action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_LEADERBOARD",
      payload: {
        leaderboard: [
          {
            user: {
              id: "user-1",
              name: "user 1",
              email: "user1@gmail.com",
            },
            score: 25,
          },
          {
            user: {
              id: "user-2",
              name: "user 2",
              email: "user2@gmail.com",
            },
            score: 20,
          },
          {
            user: {
              id: "user-3",
              name: "user 3",
              email: "user3@gmail.com",
            },
            score: 15,
          },
          {
            user: {
              id: "user-4",
              name: "user 4",
              email: "user4@gmail.com",
            },
            score: 10,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboard);
  });
});
