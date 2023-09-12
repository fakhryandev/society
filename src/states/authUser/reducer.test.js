import authUserReducer from "./reducer";

/**
 * - test scenario for authUserReducer function
 *  - should return null when given by unknown action
 *  - should return the authUser when given by SET_AUTH_USER action
 *  - should return null when given by UNSET_AUTH_USER action
 */

describe("authUserReducer function", () => {
  it("should return null when given by unknown action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNWON" };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the authUser when given by SET_AUTH_USER action", () => {
    // arrange
    const authUser = {
      id: "user-1",
      name: "user1",
      email: "user1@gmail.com",
      avatar: "https://ui-avatars.com/api/?name=user1&background=random",
    };
    const action = {
      type: "SET_AUTH_USER",
      payload: {
        authUser: {
          id: "user-1",
          name: "user1",
          email: "user1@gmail.com",
          avatar: "https://ui-avatars.com/api/?name=user1&background=random",
        },
      },
    };

    // action
    const nextState = authUserReducer(authUser, action);

    // assert
    expect(nextState).toEqual(authUser);
  });

  it("should return null when given by UNSET_AUTH_USER action", () => {
    // arrange
    const authUser = null;
    const action = {
      type: "UNSET_AUTH_USER",
    };
    // action
    const nextState = authUserReducer(authUser, action);

    // assert
    expect(nextState).toEqual(authUser);
  });
});
