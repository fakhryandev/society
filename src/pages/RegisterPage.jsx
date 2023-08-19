import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RegisterInput from "../components/RegisterInput";
import { asyncRegisterUser } from "../states/users/action";
import { asyncPreloadProcess } from "../states/isPreload/action";

function RegisterPage() {
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

  const onRegister = ({ e, name, email, password }) => {
    e.preventDefault();
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  return (
    <section className="card bg-white px-12 py-8 rounded-md">
      <h2 className="text-2xl mb-8">Create your account</h2>
      <RegisterInput register={onRegister} />
      <p className="text-center mt-5">
        Already have an account?{" "}
        <Link className="border-b font-bold border-gray-500" to="/login">
          Login
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
