import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { asyncPreloadProcess, setIsPreloadActionCreator } from "./action";
import { setAuthUserActionCreator } from "../authUser/action";

const fakeProfileResponse = {
  id: "user-1",
  name: "test",
  email: "testtest@gmail.com",
};

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncPreloadProcess thunk", () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;

    delete api._getOwnProfile;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeProfileResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeProfileResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
