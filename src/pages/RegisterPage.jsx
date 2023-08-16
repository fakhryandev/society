import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
  const dispatch = useDispatch();
  const onRegister = ({ name, email, password }) => {
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
