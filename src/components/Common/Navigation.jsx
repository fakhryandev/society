import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { asyncPreloadProcess } from "../../states/isPreload/action";
import { asyncUnsetAuthUser } from "../../states/authUser/action";

function Navigation() {
  const { isPreload = false, authUser = null } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };
  return (
    <nav className="navbar container mx-auto text-black font-bold">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Society
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {!authUser ? (
            <li>
              <Link className="btn btn-info btn-sm" to="/login">
                Login
              </Link>
            </li>
          ) : (
            <button
              onClick={handleLogout}
              type="button"
              className="btn btn-warning btn-sm"
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
