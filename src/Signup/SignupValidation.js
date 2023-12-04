var successIdentifier=0;

function validateEmail(){
    var email=document.getElementById("email").value;
    if (email === ""){
        successIdentifier=0
        window.alert("Enter email");
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

function next(){
    window.location="file:///C:/Users/Akash/Documents/hello.html"
}

function validateall(){
    validateEmail();
    if (successIdentifier !== 0){
        validatePassword();
    }

    if (successIdentifier !== 0){
        validateConfirmpassword();
    }

    if (successIdentifier !== 0){
        next();
        
    }
}

export default validateall