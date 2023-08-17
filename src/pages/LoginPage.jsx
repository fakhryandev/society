import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";
import { asyncPreloadProcess } from "../states/isPreload/action";

function LoginPage() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser) {
    return navigate("/");
  }

  const onLogin = ({ e, email, password }) => {
    e.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="card bg-white px-12 py-8 shadow-md">
      <h2 className="text-2xl mb-8">Login</h2>
      <LoginInput login={onLogin} />
      <p className="text-center mt-5">
        Dont have account?{" "}
        <Link className="border-b font-bold border-gray-500" to="/register">
          Register
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;
