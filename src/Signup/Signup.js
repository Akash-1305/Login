import validateall from "./SignupValidation"
import './Signup.css'

function Signup() {
  return (
    <div>
      <form autoComplete="off">
        <script src='./valitaion.js'></script>
        <h1>Sign up</h1><br></br>
        <label>Email: </label>
        <input id='email' type='email' required></input><br></br>

        <label>Password: </label>
        <input id='password' type='password' required></input><br></br>

        <label>Confirm Password: </label>&nbsp;&nbsp;
        <input id='confirmpassword' type='password' required></input><br></br>

        <button onClick={validateall}>Next</button>
      </form>
    </div>
  );
}

export default Signup;
