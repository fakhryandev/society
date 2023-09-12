import api from "../../utils/api";
import {
  asyncReceiveLeaderboard,
  receiveLeaderboardActionCreator,
} from "./action";

/**
 * skenario test
 *
 * - asyncReceiveLeaderboard thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeLeaderboardResponse = [
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
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncReceiveLeaderboard thunk", () => {
  beforeEach(() => {
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api._getLeaderboard;

    delete api._getLeaderboard;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardActionCreator(fakeLeaderboardResponse)
    );
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveLeaderboard()(dispatch);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
