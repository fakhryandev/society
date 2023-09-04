import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import asyncPopulateUsersAndThreads from "../../states/shared/action";

function RightBar() {
  const location = useLocation();

  if (location.pathname === "/create-thread") {
    return null;
  }

  const { threads = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const categories = threads.reduce((result, thread, index) => {
    if (!result.some((item) => item.category === thread.category)) {
      result.push({ id: index, category: thread.category });
    }
    return result;
  }, []);

  return (
    <aside className="col-span-3 hidden lg:block px-4">
      <span className="text-lg font-bold mb-4">Categories</span>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <p className="py-2">{`#${item.category}`}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default RightBar;
