function validateName() {
  var name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Enter Your Name");
    return false;
  }
  return true;
}

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

function validateConfirmpassword() {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  if (confirmpassword !== password) {
    alert("Passwords do not match");
    return false;
  }
  return true;
}

function validateCheckbox() {
  var checkbox = document.getElementById("terms"); // Fixed ID
  if (!checkbox.checked) {
    alert("Accept the Terms & Conditions");
    return false;
  }
  return true;
}

function validateall(event) {
  event.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmpassword() &&
    validateCheckbox()
  ) {
    alert("Signed In Successfully!");
    window.location.reload();
  }
}

export default validateall;
