function loginValidation(){
    var getUserName = document.loginForm.User.value;
    var getUserPassword = document.loginForm.Password.value;
    var username = "user";
    var password = "pass";
    var counter = 0;
    if(counter < 3){
        if((getUserName == username) && (getUserPassword == password)){
            return true;
        }else{
            alert("Something went wrong, try again")
            counter++;
            return false;
        }
    }
}