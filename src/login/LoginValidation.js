function validateEmail() {
  var email = document.getElementById("email").value.trim();
  if (email === "") {
    alert("Enter Your E-mail");
    return false;
  }
  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;
  if (password === "") {
    alert("Enter Your Password");
    return false;
  }
  return true;
}

function validateall(event) {
  event.preventDefault();

  if (validateEmail() && validatePassword()) {
    alert("Logged In Successfully!");
    window.location.reload()
  }
}

export default validateall;
