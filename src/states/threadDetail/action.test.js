import api from "../../utils/api";
import {
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
} from "./action";

/**
 * skenario test
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeThreadDetailResponse = {
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

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncReceiveThreadDetail thunk", () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;

    delete api._getThreadDetail;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(clearThreadDetailActionCreator());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetailResponse)
    );
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(clearThreadDetailActionCreator());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
