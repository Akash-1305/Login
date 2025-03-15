import { Link } from "react-router-dom";
import validateall from "./SigninValidation";
import signinbg from "../Images/signin.jpg";

function Signup() {
  return (
    <div
      style={{
        backgroundImage: `url(${signinbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <form className="container shadow p-3 w-25" autoComplete="off">
        <script src="./valitaion.js"></script>
        <h2 className="text-center mb-3">Create your account</h2>
        <label className="form-label">Name</label>
        <input
          className="form-control bg-transparent"
          type="text"
          id="name"
          required
          style={{ color: "white" }}
        />
        <label className="form-label">Email: </label>
        <input
          className="form-control bg-transparent"
          id="email"
          type="email"
          required
          style={{ color: "white" }}
        />
        <label className="form-label">Password: </label>
        <input
          className="form-control bg-transparent"
          id="password"
          type="password"
          required
          style={{ color: "white" }}
        />
        <label className="form-label">Confirm Password: </label>
        <input
          className="form-control bg-transparent"
          id="confirmpassword"
          type="password"
          required
          style={{ color: "white" }}
        />
        <input
          type="checkbox"
          className="form-check-input me-2 bg-transparent"
          id="terms"
        />
        <label className="form-check-label">
          I agree to the
          <Link className="text-decoration-none">Terms & Conditions</Link>
        </label>
        <button
          className="btn btn-primary form-control mt-3"
          onClick={validateall}
        >
          Sign In
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
