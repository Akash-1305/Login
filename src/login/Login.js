import { Link } from "react-router-dom";
import validateall from "./LoginValidation";
import loginbg from "../Images/login.jpg";

function Signup() {
  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="container shadow p-3 w-25" autoComplete="off">
        <script src="./valitaion.js"></script>
        <h2 className="text-center mb-3">Login</h2>
        <label className="form-label">Email: </label>
        <input
          className="form-control bg-transparent"
          id="email"
          type="email"
          required
        />
        <label className="form-label">Password: </label>
        <input
          className="form-control bg-transparent"
          id="password"
          type="password"
          required
        />
        <button
          className="btn btn-primary form-control mt-3"
          onClick={validateall}
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account?
          <Link to="/" className="text-decoration-none">
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
