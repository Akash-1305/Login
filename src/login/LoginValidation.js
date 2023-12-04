var successIdentifier=0;

function validateUsername(){
    var username=document.getElementById("username").value;
    if (username === ""){
        successIdentifier=0
        window.alert("Enter username");
    }
    else{
        successIdentifier=1;
    }
}

function validatePassword(){
    var password=document.getElementById("password").value;
    if ((password === "")){
        successIdentifier=0
        window.alert("Enter password");
    }
    else{
        successIdentifier=1;
    }
}

function validateConfirmpassword(){
    var confirmpassword=document.getElementById("confirmpassword").value;
    var password=document.getElementById("password").value;
    if (confirmpassword !== password){
        successIdentifier=0
        window.alert("password does't match");
    }
    else{
        successIdentifier=1;
    }
}

function validateall(){
    validateUsername();
    if (successIdentifier !== 0){
        validatePassword();
    }

    if (successIdentifier !== 0){
        validateConfirmpassword();
    }

    if (successIdentifier !== 0){
        window.alert("Login Succesfull");
    }
}

export default validateall