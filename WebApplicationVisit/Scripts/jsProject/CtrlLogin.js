/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016


*/
//Variales

var user;
var password;
var textInfoForm;
//Start page
$(document).ready(function () {
    textInfoForm = $('#textInfoForm');
    textInfoForm.css('color', 'red');
    $('.modal-trigger').leanModal();
    _loadViewObject(0);
});
//Send Login ajax C#
function sendLogin(model) {

    $.ajax({
        url: "/Login/LoginEmployee",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: model,
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                StorageLogin(result[0]);
                textInfoForm.text("");
            } else {
                textInfoForm.text("No se encontraron datos");
                clearTextBox();
                enableButton(1);
            }
      

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
            enableButton(1);
        }
    });

}
//Send Reset password Login ajax C#
function sendResetPassword(model) {

    $.ajax({
        url: '/Login/ResetPasswordEmployee',
        cache: false,
        type: 'GET',
        data: model,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
                
                textInfoForm.text(result);
                clearTextBox();
                setTimeout(function () {
                    redirection();
                    enableButton(1);
                }, 3000);
                

        },
        error: function (response) {
          
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
        objectEmployeeJson.sEmp_mail = user;
        objectEmployeeJson.sEmp_password = password;
        enableButton(0);
     
        sendLogin(objectEmployeeJson);
    }
    else {
        alert("Verifique los datos ingresados ");
    }

    e.preventDefault();
}
//Validate Text Login
function validateResetLogin(e) {
    //debugger;
    let bValidate = true;
    var userReset = $('#ResetPassword').val();
    var textAnswer = $('#textAnswerResetPassword').val();

  
    if (!expressionEmail.test(userReset)) {
        bValidate = false;
    }
  
    if (bValidate) {

        objectEmployeeJson.sEmp_mail = userReset;
        enableButton(0);
        sendResetPassword(objectEmployeeJson);
   
    }
    else {
        textAnswer.text("Verifique los datos ingresados ");
    }

    //debugger;
    e.preventDefault();
}
function clearTextBox() {
    $('#user').val("");

    $('#password').val("");

    $('#ResetPassword').val("");


    $('#user').removeClass('active');
    $('#password').removeClass('active');
    $('#ResetPassword').removeClass('active');
    $('form label').removeClass('active');
    $('form i').removeClass('active');
  
}



