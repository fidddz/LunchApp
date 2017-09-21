function loginValidation(){
    var getUserName = document.loginForm.User.value;
    var getUserPassword = document.loginForm.Password.value;
    var username = "user"; //call to db : TODO
    var password = "pass"; //call to db : TODO
    var counter = 0;

    var content;
    var fs = require("fs");
    var file = "./TempDB.json";
    fs.readFile(file, function read(err, data){
        if(err) throw err;
        content = data;
        if(counter < 3){
            if((data.name == username) && (data.password == password)){
                return true;
            }else{
                alert("Something went wrong, try again")
                counter++;
                return false;
            }
        }  
    });



}