import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { asyncPreloadProcess } from "../../states/isPreload/action";

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
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
