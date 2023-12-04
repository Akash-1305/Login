import validateall from "./LoginValidation"
import './Login.css'

function Loginpage() {
  return (
    <div>
      <form autoComplete="off">
        <script src='./valitaion.js'></script>
        <h1>Login</h1><br></br>
        <label>Username: </label>
        <input id='username' type='textbox' required></input><br></br>

        <label>Password: </label>
        <input id='password' type='password' required></input><br></br>

        <button onClick={validateall}>Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
