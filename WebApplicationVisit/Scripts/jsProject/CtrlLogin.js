/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016


*/
//Variales

var user;
var password;

//Start page
$(document).ready(function () {
 
    $('.modal-trigger').leanModal();
});
//Send Login ajax C#
function sendLogin(model) {
    
    $.ajax({
        url: '/Login/LoginEmployee',
        cache: false,
        type: 'POST',
        data: model,
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            debugger;
            if (result.length > 0) {
 
               console.log(result);
                StorageLogin(result[0]);
                /*$.each(result[0], function (i, item) {
                    console.log("-" + i);
                    console.log("/t-" + item);

                });
                */
            }
            else {
                alert("Error usuario o contraseña son  incorrectos");
                clearTextBox();
            }

        },
        error: function (response) {
            alert(response.responseText);
            clearTextBox();

        }

    });

    return false;
}
//Send Reset password Login ajax C#
function sendResetPassword(model) {

    $.ajax({
        url: '/Login/ResetPasswordEmployee',
        cache: false,
        type: 'POST',
        data: model,
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
   
           // console.log(result);
            $('#textAnswerResetPassword').text(result);
            setTimeout(function () { redirection(); }, 5000);
            clearTextBox();

                

        },
        error: function (response) {
            debugger;
            alert(response.responseText);
            

        }

    });

    return false;
}
//Validate Text Login
function validateLogin(e) {

    let bValidate=true;
     user=$('#user').val();
     password = $('#password').val();

    if (!expressionEmail.test(user)) {
        bValidate = false;
    }
    if (expressionData.test(password)) {
        bValidate = false;
    }
    
    if (bValidate) {
        let dataJson = {
            sEmp_mail: user,
            sEmp_password: password,
        }
      
        sendLogin(JSON.stringify(dataJson));
    }
    else {
        alert("Verifique los datos ingresados ");
    }

    e.preventDefault();
}
//Validate Text Login
function validateResetLogin(e) {

    let bValidate = true;
    var userReset = $('#ResetPassword').val();
    var textAnswer = $('#textAnswerResetPassword').val();

  
    if (!expressionEmail.test(userReset)) {
        bValidate = false;
    }
  
 

    if (bValidate) {

        let dataJson = {
            sEmp_mail: userReset,

        }
        console.log(dataJson);


        sendResetPassword(JSON.stringify(dataJson));
    }

    else {
        alert("Verifique los datos ingresados ");
    }

    debugger;
    e.preventDefault();
}
function clearTextBox() {
    $('#user').val("");
    $('#password').val("");
    $('#ResetPassword').val("");
  
}



