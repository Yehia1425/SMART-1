var SignupName = document.getElementById("signupname");
var SignupEmail = document.getElementById("signupemail");
var SignupPassword = document.getElementById("signuppassword");

var Login=[];


document.getElementById('signup').addEventListener('click', function(){
    window.location= './login.html'
})









function addEmail(){

    var login = {
        name: SignupName.value,
        email:SignupEmail.value,
        password: SignupPassword.value,
    }

    Login.push(login);
    
    localStorage.setItem(  "Signup"  , JSON.stringify(Login)   )
    console.log(Login);
}


function validationName(){
    var regax = /^[a-zA-Z][a-zA-Z0-9 ]{2,19}$/;
var term =SignupName.value;
if(regax.test(term)){
    SignupName.classList.add("is-valid")
    SignupName.classList.remove("is-invalid")
    msgname.classList.add("d-none")
    return true;

}
else{

    SignupName.classList.add("is-invalid")
    SignupName.classList.remove("is-valid")
    msgname.classList.remove("d-none")
    return false;

}


}


function validationemail(){
    var pattern =/^[a-zA-Z0-9._%+-]+@[gG][mM][aA][iI][lL]\.[cC][oO][mM]$/; 
    var email =  SignupEmail.value;
    if(pattern.test(email)){
        SignupEmail.classList.add("is-valid")
        SignupEmail.classList.remove("is-invalid")
        masemail.classList.add("d-none")
        return true;


    }
    else{
        
        SignupEmail.classList.add("is-invalid")
        SignupEmail.classList.remove("is-valid")
        masemail.classList.remove("d-none")
    return false;
    }
}

function validationpassword(){
    var pattern =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,20}$/;
    var password =  SignupEmail.value;
    if(pattern.test(password)){
        SignupPassword.classList.add("is-valid")
        SignupPassword.classList.remove("is-invalid")
        maspassword.classList.add("d-none")
        return true;


    }
    else{
        
        SignupPassword.classList.add("is-invalid")
        SignupPassword.classList.remove("is-valid")
        maspassword.classList.remove("d-none")
    return false;
    }
}



