import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftBarItem from "./LeftBarItem";
import { asyncPreloadProcess } from "../../states/isPreload/action";

function LeftBar() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const menus = [
    {
      to: "/",
      text: "Home",
      icon: <BiHome />,
    },
    {
      to: "/leaderboard",
      text: "Leaderboard",
      icon: <MdOutlineLeaderboard />,
    },
  ];

  return (
    <aside className="hidden lg:block lg:col-span-2 h-25">
      {authUser ? (
        <Link to="/create-thread">
          <button
            type="button"
            className="btn btn-sm btn-primary w-full mb-5 h-10"
          >
            Create Thread
          </button>
        </Link>
      ) : null}
      <ul className="menu menu-md rounded-box bg-white gap-2">
        {menus.map((menu) => {
          const { to, icon, text } = menu;
          return (
            <li key={menu.text}>
              <LeftBarItem to={to} icon={icon} text={text} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default LeftBar;
