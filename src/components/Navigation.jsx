import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar container mx-auto text-black font-bold">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Society
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="btn btn-info btn-sm" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
