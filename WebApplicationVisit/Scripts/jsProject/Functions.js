/*
**********************************************
Create :DIEGO CASALLAS
Date :20/10/2016

*/
//Variales
var dato;
const expressionData = /^\s+$/;
const expressiomNumber = /^\d{7,10}/;
const expressionEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
const expressionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

$(document).ready(function () {


})


function ini() {

    dato = setTimeout('alert("si  esta")', 5000); // 5 segundos
}
function parar() {
    clearTimeout(dato);
    ini();

}
//Function validate Storage 
function validateStorage() {
    if (typeof (Storage) !== "undefined") {
      
        if (sessionStorage.getItem("session") === "TRUE") {
       
            //loadDataUser(localStorage.getItem('dataUser'));
            return true;
        } else {
            // GetStorage
            redirection();
           
        }
       
    } else {
        // Sorry! No Web Storage support..
        redirection();
    }
}
//Function redirection  
function redirection() {
    window.location.assign("/Login/Index");
    sessionStorage.removeItem("dataUser");
    sessionStorage.removeItem("session");
 
}
//Function no back button 
function nobackbutton() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
}
//Function close Session
function closeSession() {

    if (confirm("Esta segur@ de cerrar sesión") == true) {
        redirection();
        location.reload();
    } 
    
}
function validateSession(dataUrl) {
  
    let session = sessionStorage.getItem("session");
    
    if (dataUrl.search("Login") == -1 && session === "TRUE") {
        loadDataUser(sessionStorage.getItem("dataUser"));
        
    } else {
       redirection();
    }
    
  
}
// get Url
function getUrl(data) {

    let search = data.indexOf("?");
    if (search == -1) {
         redirection();
    } else {

        return data.substring(search + 1, data.length).replace("data=", "");
    }
  
}
function StorageLogin(data) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        // Store
        sessionStorage.setItem("dataUser", JSON.stringify(data));
        sessionStorage.setItem("session", "TRUE");
        clearTextBox();
        window.location.assign("/Home/Home");


    } else {
        // Sorry! No Web Storage support..
    }
}
//Function clear input 
function clearInput(get_from) {

    //Type input 
    let fromInput = $(get_from + ' form :input');
    fromInput.val("");
    fromInput.removeClass('invalid');
    //Type text 
    let fromtext = $(get_from + ' form :input[type=text]');
    fromtext.val("");
    fromtext.removeClass('valid');
    //Type tel     
    let fromTel = $(get_from + ' form :input[type=tel]');
    fromTel.val("");
    fromTel.removeClass('valid');
    //Type number
    let fromNumber = $(get_from + ' form :input[type=number]');
    fromNumber.val("");
    fromNumber.removeClass('valid');
    //Type email
    let fromMail = $(get_from + ' form :input[type=email]');
    fromMail.val("");
    fromMail.removeClass('valid');
    //Type password
    let fromPassword = $(get_from + ' form :input[type=password]');
    fromPassword.val("");
    fromPassword.removeClass('valid');
    //Type label
    let fromLabel = $(get_from + ' form label');
    fromLabel.removeClass('active');
    //Type i
    let fromI = $(get_from + ' form i');
    fromI.removeClass('active'); 
}
//Function clear input 
function disableEnableInput(dataForm, type) {
   
    let get_from = '#form' + dataForm;
    let selectValidate = true;
    if(type!=0){
        selectValidate = false;
    }
    else{
        selectValidate = true;
    }
    //Type input 
    let fromInput = $(get_from + ' form :input');
    fromInput.prop('disabled', selectValidate);

    //Type text 
    let fromtext = $(get_from + ' form :input[type=text]');
    fromtext.prop('disabled', selectValidate);

    //Type tel     
    let fromTel = $(get_from + ' form :input[type=tel]');
    fromTel.prop('disabled', selectValidate);

    //Type number
    let fromNumber = $(get_from + ' form :input[type=number]');
    fromNumber.prop('disabled', selectValidate);
   
    //Type email
    let fromMail = $(get_from + ' form :input[type=email]');
    fromMail.prop('disabled', selectValidate);

    //Type password
    let fromPassword = $(get_from + ' form :input[type=password]');
    fromPassword.prop('disabled', selectValidate);
    
    

}
//Function clear elements input form  
function disableEnableElementInput(dataForm, type) {

    let get_from = dataForm;

    let selectValidate = true;
    if (type != 0) {
        selectValidate = false;
    }
    else {
        selectValidate = true;
    }
    //Type input 
    let fromInput = $(get_from + ' :input');
    fromInput.prop('disabled', selectValidate);

    //Type text 
    let fromtext = $(get_from + ' :input[type=text]');
    fromtext.prop('disabled', selectValidate);

    //Type tel     
    let fromTel = $(get_from + '  :input[type=tel]');
    fromTel.prop('disabled', selectValidate);

    //Type number
    let fromNumber = $(get_from + '  :input[type=number]');
    fromNumber.prop('disabled', selectValidate);

    //Type email
    let fromMail = $(get_from + '  :input[type=email]');
    fromMail.prop('disabled', selectValidate);

    //Type password
    let fromPassword = $(get_from + '  :input[type=password]');
    fromPassword.prop('disabled', selectValidate);



}


//Fuction clear table 
function cleanTable(table) {
    var html = '';
    
        $('#'+table+'  tbody').html(html);
}
//Function create table list
function createTable(data) {

    var html = '';
    if (typeTatble == 0) {
        $.each(data, function (key, item) {
            html += '<tr>';
            html += '<td>' + item.sRol_name + '</td>';
            html += '<td>' + item.sEmp_name + '</td>';
            html += '<td>' + item.sEmp_surname + '</td>';
            html += '<td>' + item.sEmp_document + '</td>';
            html += '<td>' + item.sEmp_phone + '</td>';
            html += '<td>' + item.sEmp_phone2 + '</td>';
            html += '<td>' + item.sEmp_cell_phone + '</td>';
            html += '<td>' + item.sEmp_cell_phone2 + '</td>';
            html += '<td>' + item.sEmp_mail + '</td>';
            html += '<td>' + item.sEmp_mail2 + '</td>';
            html += '<td>' + item.sEmp_addres + '</td>';
            html += '</tr>';
        });
        $('#listEmployee  tbody').html(html);

    }
    else if (typeTatble == 1) {
        $.each(data, function (key, item) {
            html += '<tr>';
            html += '<td>' + item.sRol_name + '</td>';
            html += '<td>' + item.sEmp_name + '</td>';
            html += '<td>' + item.sEmp_surname + '</td>';
            html += '<td>' + item.sEmp_document + '</td>';
            html += '<td>' + item.sEmp_phone + '</td>';
            html += '<td>' + item.sEmp_cell_phone + '</td>';
            html += '<td>' + item.sEmp_mail + '</td>';
            html += '<td><button class="btn-floating waves-effect waves-light red" type="button" name="action" onclick="deleteEmployeed(' + item.iEmp_id + ',event)"><i class="material-icons right">verified_user</i></button></td>';
            html += '</tr>';
        });
        $('#listEmployeeDelete  tbody').html(html);

    }
    else if (typeTatble == 2) {
        let listInput = new Array();
        listInput[0] = $('#emp_name').prop('disabled', false);
        listInput[1] = $('#emp_surname').prop('disabled', false);
        listInput[2] = $('#emp_address').prop('disabled', false);
        listInput[3] = $('#emp_document');
        listInput[4] = $('#emp_phone').prop('disabled', false);
        listInput[5] = $('#emp_phone2').prop('disabled', false);
        listInput[6] = $('#emp_cel_phone').prop('disabled', false);
        listInput[7] = $('#emp_cel_phone2').prop('disabled', false);
        listInput[8] = $('#emp_mail');
        listInput[9] = $('#emp_mail2').prop('disabled', false);
        listInput[10] = $('#emp_password').prop('disabled', false);
        listInput[11] = $('#emp_password_confirm').prop('disabled', false);
        $(".select-wrapper :input[type=text]").prop('disabled', false);
        $("#btnUpdateInsert").prop('disabled', false);
        $(".input-field :input[type=text]").prop('disabled', false);
        $(".input-field :input[type=file]").prop('disabled', false);
        
        listInput[0].val(data[0].sEmp_name);
        listInput[1].val(data[0].sEmp_surname);
        listInput[2].val(data[0].sEmp_addres);
        listInput[3].val(data[0].sEmp_document);
        listInput[4].val(data[0].sEmp_phone);
        listInput[5].val(data[0].sEmp_phone2);
        listInput[6].val(data[0].sEmp_cell_phone);
        listInput[7].val(data[0].sEmp_cell_phone2);
        listInput[8].val(data[0].sEmp_mail);
        listInput[9].val(data[0].sEmp_mail2);
        listInput[10].val(data[0].sEmp_password);
        listInput[11].val(data[0].sEmp_password);
        //Type label
        let fromLabel = $("#form" + fromUpdateInsert + ' form label');
        fromLabel.addClass('active');
        //Type i
        let fromI = $(fromUpdateInsert + ' form i');
        fromI.addClass('active');
        
       
    }
}

//Function Validate email 
function validateBoxEmail(input) {
    let mail = input.val();
    let validate = true;
    input.removeClass('invalid');
    if (!expressionEmail.test(mail)) {
        validate = false;
        input.addClass('invalid');
    } else {
        input.removeClass('invalid');
    }
    return validate;
}
//Function Validate text 
function validateBoxText(inputs) {
    let validate = true;
    for (let i = 0; i < inputs.length; i++) {
      
        if ((expressionData.test(inputs[i].val())) || (inputs[i].val().length<=0)) {
            inputs[i].addClass('invalid');
            validate = false;
        } else {
            inputs[i].removeClass('invalid');
        }
    }

    return validate;

}
//Function Validate password 
function validateBoxPassword(input) {
    let password = input.val();
    let validate = true;
    if (!expressionPassword.test(password)) {
        validate = false;
        input.addClass('invalid');
    } else {
        input.removeClass('invalid');
    }
    return validate;
}
//Function Validate password  confirm
function validateBoxPasswordConfirm(input, input2) {
    let password = input.val();
    let password2 = input2.val();
    let validate = true;
    if (password != password2) {
        validate = false;
        input2.addClass('invalid');
    } else {
        input2.removeClass('invalid');
    }
    return validate;
}
//Function Validate select list
function validateSelectList(lists) {

    let validate = true;
    for (let i = 0; i < lists.length; i++) {
        if(lists[i].val()!="" || lists[i].val()!=null){
            if (lists[i].val() ==null) {
                validate = false;
               
            } 
        }
    }

    return validate;
}






//Function  validator
function formInputTel(form) {
    let validate = true;
    let InputTel = $(form + " :input[type=tel]");
    InputTel.each(function (index) {
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        let text = getId.val();
        if (getId.prop('required')) {
            if (!expressiomNumber.test(text) || text.length < 3) {
                validate = false;
                getId.addClass('invalid');
            } else {
                getId.removeClass('invalid');
            }
        } else {
            if (text.length > 3 || text != "") {
                if (!expressiomNumber.test(text) || text.length < 3) {
                    validate = false;
                    getId.addClass('invalid');
                } else {
                    getId.removeClass('invalid');
                }
            }
        }
    });
    return validate;
}
function formInputText(form) {
    let validate = true;
    let InputText = $(form + " :input[type=text]");

    InputText.each(function (index) {
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        let text = getId.val();
        // console.log(text);
        if (getId.prop('required')) {
            if (expressionData.test(text) || text.length < 3) {
                validate = false;
                getId.addClass('invalid');
            } else {
                getId.removeClass('invalid');
            }
        } else {

        }
    });

    return validate;
}
function formInputPassword(form) {
    let validate = true;
    let InputPassword = $(form + " :input[type=password]");
    InputPassword.each(function (index) {
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        let text = getId.val();
        if (getId.prop('required')) {
            if (!expressionPassword.test(text)) {
                validate = false;
                getId.addClass('invalid');
            } else {
                getId.removeClass('invalid');
            }
        }

    });
    return validate;
}
function formInputMail(form) {
    let validate = true;
    let InputMail = $(form + " :input[type=email]");
    InputMail.each(function (index) {
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        let text = getId.val();
        if (getId.prop('required')) {
            if (!expressionEmail.test(text)) {
                validate = false;
                getId.addClass('invalid');
            } else {
                getId.removeClass('invalid');
            }
        } else {
            if (text.length > 3 || text != "") {
                if (!expressionEmail.test(text) || text.length < 3) {
                    validate = false;
                    getId.addClass('invalid');
                } else {
                    getId.removeClass('invalid');
                }
            }
        }

    });
    return validate;
}
function formInputSelect(form) {
    let validate = true;
    let InputSelect = $(form + " select");

    InputSelect.each(function (index) {
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        let text = getId.val();
        //console.log(text);
        if (text != null) {
            if (text.length == 0) {
                validate = false;

            }
        } else {
            validate = false;
        }

    });

    return validate;
}
