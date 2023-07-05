import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  return (
    <form>
      <input type="text" value={name} onChange={setName} placeholder="Name" />
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
      <button type="button" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
