/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016


*/
//Variales

var user;
var password;
var dataUser;

//Start page
$(document).ready(function () {
    loadPage(document.URL); 
});

//Load url 
function loadPage(dataUrl) {
  
    dataUser=getUrl(dataUrl);

}
//Clear textbox
function clearTextBox() {
    $('#password').val("");
    $('#passwordVefification').val("");

}
//Validate send new password
function validatePassword(e) {
    let password = $("#password").val();
    let passwordV = $("#passwordVerification").val();
   

    if (expressionPassword.test(password)) {
        //console.log(password);
        //console.log(passwordV);
        if (password != passwordV) {
            $('#informationPassword').text('Verifique: Las contraseñas no coinciden ');
        } else {
            $('#informationPassword').text('');
            let dataJson={
                sEmp_password:password,
                iEmp_id:dataUser
                }
            sendNewPassword(dataJson);
            //console.log(dataJson);
        }

    } else {
        
        $('#informationPassword').text('Tenga en cuenta :Mínimo 8 caracteres, máximo 15, al menos una letra mayúscula, al menos una letra minúscula, al menos un carácter, no espacios en blanco.');
    }
    

    e.preventDefault();
}
//Send new password
function sendNewPassword(model) {


    $.ajax({

        url: "/NewPassword/UpdatePasswordUser",
        cache: false,
        type: 'GET',
        data: model,
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            if (result.length > 0) {
                $('#informationPassword').text("Señ@r : " + result[0].sEmp_surname + " " + result[0].sEmp_surname + "contraseña actualizada");
                setTimeout(function () { redirection(); }, 5000);
                clearTextBox();
            }
             else{
    
             }
            console.log(result);
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });

    return false;
  
}