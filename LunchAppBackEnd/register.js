function register(){
    var getUserName = document.registerForm.User.value;
    var getUserPassword = document.registernForm.Password.value;
    var getUserRepeatPassword = document.registernForm.repeatPassword.value;
    var jsonObj = JSON.stringify(data);




    var file = "C:\Users\felix.risen\Desktop\LunchApp\LunchAppBackEnd\TempDB.json";
    file.open("w");
    file.write(jsonObj);
    file.close();

    var saveToDB = require("fs");
    var data = {
        name: getUserName,
        password: getUserPassword,
    }
    var jsonObj = JSON.stringify(data);
}