
var SigninEmail= document.getElementById("signinEmail");

var SigninPassword= document.getElementById("signinPassword");

var Signin=[];

Signin.push(Signin);

document.getElementById('HomePage').addEventListener('click', function(){
    window.location= './home.html'
})





function getdata(){
        ( JSON.parse(localStorage.getItem("Signup")))
        if(  validationemail() && validationpassword() ){
            var all ={
        
                name:SigninEmail.value,
                password : SigninPassword.value
            }
            Signin.push(all);
            localStorage.setItem(  "signup"   , JSON.stringify(    Signin   )  )
        }
}
getdata()



function validationemail(){
    var pattern =/^[a-zA-Z0-9._%+-]+@[gG][mM][aA][iI][lL]\.[cC][oO][mM]$/; 
    var email =  SigninEmail.value;
    if(pattern.test(email)){
        SigninEmail.classList.add("is-valid")
        SigninEmail.classList.remove("is-invalid")
        masemail.classList.add("d-none")
        return true;


    }
    else{
        
        SigninEmail.classList.add("is-invalid")
        SigninEmail.classList.remove("is-valid")
        masemail.classList.remove("d-none")
    return false;
    }
}

function validationpassword(){
    var pattern =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,20}$/;
    var password =  SigninPassword.value;
    if(pattern.test(password)){
        SigninPassword.classList.add("is-valid")
        SigninPassword.classList.remove("is-invalid")
        maspassword.classList.add("d-none")
        return true;


    }
    else{
        
        SigninPassword.classList.add("is-invalid")
        SigninPassword.classList.remove("is-valid")
        maspassword.classList.remove("d-none")
    return false;
    }
}





