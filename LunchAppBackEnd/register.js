function register(){
    var getUserName = document.registerForm.User.value;
    var getUserPassword = document.registernForm.Password.value;
    var getUserRepeatPassword = document.registernForm.repeatPassword.value;
 //var jsonObj = JSON.stringify(data);
    var data = {
        name: getUserName,
        password: getUserPassword,
    }  
    
    var jsonObj = JSON.parse(data);
    var fs = require("fs");
    var file = "./TempDB.json";

    fs.appendFile(file,jsonObj, function
        (err){
            if(err) throw err;
            console.log("Updated db" + data);
    });
}
