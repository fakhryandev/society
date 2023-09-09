import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  return (
    <form
      aria-label="form"
      className="flex flex-col gap-4"
      onSubmit={(e) => register({ e, name, email, password })}
    >
      <div>
        <label htmlFor="name">
          <span className="block mb-2">Name</span>
          <input
            className="bg-amber-50 input input-bordered w-full"
            id="name"
            type="text"
            value={name}
            onChange={setName}
            placeholder="Name"
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          <span className="block mb-2">Email</span>
          <input
            className="bg-amber-50 input input-bordered w-full"
            id="email"
            type="text"
            value={email}
            onChange={setEmail}
            placeholder="Email"
            autoComplete="current-email"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <span className="block mb-2">Password</span>
          <input
            className="bg-amber-50 input input-bordered w-full"
            id="password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
            autoComplete="current-password"
          />
        </label>
      </div>

      <button className="btn btn-info normal-case text-white" type="submit">
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
