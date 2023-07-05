import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  return (
    <form>
      <input
        type="text"
        value={email}
        onChange={setEmail}
        placeholder="Email"
        autoComplete="current-email"
      />
      <input
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        autoComplete="current-password"
      />
      <button type="button" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
