import { Link } from "react-router-dom";

function LoginCard() {
  return (
    <div className="card-body text-center">
      <p>Silakan masuk untuk mengirim komentar.</p>
      <Link to="/login" className="font-bold underline">
        Masuk
      </Link>
    </div>
  );
}

export default LoginCard;
