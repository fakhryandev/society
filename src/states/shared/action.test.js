import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import asyncPopulateUsersAndThreads from "./action";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";

const fakeThreadsResponse = [
  {
    id: "thread-1",
    title: "title thread 1",
    body: "body thread 1",
    category: "test",
    ownerId: "user-1",
    totalComments: 0,
    createdAt: "2023-05-29T07:55:52.266Z",
  },
];

const fakeUsersResponse = [
  {
    id: "user-1",
    name: "user 1",
    email: "user1@gmail.com",
  },
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncPopulateUsersAndThreads thunk", () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadsActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
