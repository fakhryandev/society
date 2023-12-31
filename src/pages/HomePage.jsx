import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import asyncPopulateUsersAndThreads from "../states/shared/action";
import ThreadList from "../components/Threads/ThreadList";

function HomePage() {
  const { threads = [], users = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
  }));
  return <ThreadList threads={threadList} />;
}

export default HomePage;
