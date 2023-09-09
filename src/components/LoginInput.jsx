import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  return (
    <form
      aria-label="form"
      className="flex flex-col gap-4"
      onSubmit={(e) => login({ e, email, password })}
    >
      <input
        className="bg-amber-50 input input-bordered w-full "
        type="text"
        value={email}
        onChange={setEmail}
        placeholder="Email"
        autoComplete="current-email"
      />
      <input
        className="bg-amber-50 input input-bordered w-full"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        autoComplete="current-password"
      />
      <button
        aria-label="Login"
        className="btn btn-info normal-case text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
