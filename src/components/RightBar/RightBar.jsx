import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import asyncPopulateUsersAndThreads from "../../states/shared/action";

function RightBar() {
  const { threads = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const categories = threads.map((thread) => thread.category);

  return (
    <aside className="col-span-3 hidden lg:block px-4">
      <span className="text-lg font-bold mb-4">Categories</span>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <p className="py-2">{`#${category}`}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default RightBar;