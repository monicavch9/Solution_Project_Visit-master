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
var objectEmployeeList = new Array();
$(document).ready(function () {


})
function enableButton(data) {
    if (data == 0) {
        $('.collapsible-header').css('display', 'none');
        $('.collapsible').css('display', 'none');
        $('button').prop('disabled', true);
    } else {
        $('button').prop('disabled', false);
        $('.collapsible').css('display', 'block');
        $('.collapsible-header').css('display', 'block');
    }
}

//Function select Item 
function selectionItem(item) {
    let titleSelection = $('#' + item + '').attr("title");
    sNameTitle = titleSelection;
    let items = item.replace("item", "subItem") + "_0";
    let dataForm = items.substring(items.indexOf('_', items.length)).replace("subItem_", "");
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionSubItems(items, dataForm, false, false);

}
//Function select sub Items
function selectionSubItems(subItem, Form, cont_search) {

    let items = "#" + subItem + "";
    fromUpdateSearch = "#form_search_" + Form;
    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");
    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = sNameTitle + " " + $(items).text();
    $('#titleForm ').text(text);


    if (cont_search) {
        $('#cont_search_' + Form).css("display", "block");
        disableEnableInput(Form, 0);
        disableEnableElementInput(fromUpdateSearch, 1);

    } else {
        $('#cont_search_' + Form).css("display", "none");
        disableEnableInput(Form, 1);
        disableEnableElementInput(fromUpdateSearch, 0);
    }
    selectForm(Form);

    typeSelectionUpdateCreate = subItem.substring(subItem.indexOf("_") + 1, subItem.length);

}
//Function select Item mobile
function selectionMitem(item) {
    let titleSelection = $('#' + item + '').attr("title");
    sNameTitle = titleSelection;
    let items = item.replace("mItem", "mSubItem") + "_0";
    let dataForm = items.substring(items.indexOf('_', items.length)).replace("mSubItem_", "");
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionMsubItems(items, dataForm, false, false);

}
//Function select sub Items Mobile
function selectionMsubItems(subItem, Form, cont_search, nav_mobile) {

    let items = "#" + subItem + "";
    fromUpdateSearch = "#form_search_" + Form;
    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = sNameTitle + " " + $(items).text();
    $('#titleForm ').text(text);

    if (nav_mobile) {
        if ($('.button-collapse').is(":visible")) {
            $('.button-collapse').sideNav('hide');
        }
    }

    if (cont_search) {
        $('#cont_search_' + Form).css("display", "block");

        disableEnableInput(Form, 0);
        disableEnableElementInput(fromUpdateSearch, 1);

    } else {
        $('#cont_search_' + Form).css("display", "none");
        disableEnableInput(Form, 1);
        disableEnableElementInput(fromUpdateSearch, 0);
    }

    selectForm(Form);
    typeSelectionUpdateCreate = subItem.substring(subItem.indexOf("_") + 1, subItem.length);


}
//Function select form  
function selectForm(dataForm) {
    $(".form_select").css("display", "none");
    let form = '#form' + dataForm;
    $(form).fadeIn("slow");
    clearInput(form);
    textInfoForm.text("");
    // fromUpdateInsert = form;

}

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
       // window.location.assign("/Home/Home");
        console.log(data);

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
    if (type != 0) {
        selectValidate = false;
    }
    else {
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

    //Type Select
    let fromSelect = $(get_from + ' form select');
    fromPassword.prop('disabled', fromSelect);

    $('.disabled').prop('disabled', fromSelect);
    cleanTable();

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

    //Type Select
    let fromSelect = $(get_from + ' form select');
    fromSelect.prop('disabled', selectValidate);
 
    cleanTable();
}

//Fuction clear table 
function cleanTable(table) {
    var html = '';
    
        $('#'+table+'  tbody').html(html);
}
//Function create table list
function createTable(data) {
    // console.log(data);
    cleanTable();
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
            html += '<td><button class="btn-floating waves-effect waves-light red" type="button" name="action" onclick="deleteEmployeed(' + item.iEmp_id + ',event)"><i class="material-icons right">delete</i></button></td>';
            html += '</tr>';
        });
        $('#listEmployeeDelete  tbody').html(html);

    }
    else if (typeTatble == 2) {
      
        $(".select-wrapper :input[type=text]").prop('disabled', false);
        $("#btnUpdateInsert").prop('disabled', false);
        $(".input-field :input[type=text]").prop('disabled', false);
        $(".input-field :input[type=file]").prop('disabled', false);
        //Type label
        let fromLabel = $("label");
        fromLabel.addClass('active');
        
        //Type i
        let fromI = $("i");
        fromI.addClass('active');

        let id = data[0];
        for (key in id) {
            let data = id[key];
            let inputs=$("#" + key);
 
            if (key == "sEmp_document" || key == "sEmp_mail") {
                $('.inputNotEditable').prop('disabled', true);

            } else {
                inputs.prop('disabled', false);
                
            }
            if (key == 'sEmp_password') {
                $("#emp_password_confirm").val(id[key]);
                $("#emp_password_confirm").prop('disabled', false);
            }
            if (key == "iRol_id") {
                //console.log(id[key]);
                createSelctHtml(objectEmployeeList[0], key, 'sRol_name', '' + id[key]);

            }
            if (key == "iBra_buis_id") {
         
                //console.log("bus" + id[key]);
                createSelctHtml(objectEmployeeList[1], key, 'sBra_buis_name', '' + id[key]);

            }
            if (key == "sEmp_permission") {
                //console.log("Per"+id[key]);
                createSelctHtml(objectEmployeeList[2], key, 'sPer_name', '' + id[key]);

            }
            if (key != "iRol_id" || key != "sEmp_permission" || key != "iBra_buis_id") {

                inputs.val(id[key]);
            }
           
            
        }
         
    }
    else if (typeTatble == 3) {
        $.each(data, function (key, item) {
            html += '<tr>';
            html += '<td>' + item.sCli_bus_name + '</td>';
            html += '<td>' + item.sCli_bus_document + '</td>';
            html += '<td>' + item.sCit_name + '</td>';
            html += '<td>' + item.sCont_name + '</td>';
            html += '<td>' + item.sBra_off_address + '</td>';
            html += '<td>' + item.sBra_off_phone + '</td>';
            html += '</tr>';
        });
        $('#listClient  tbody').html(html);

    }
    else if (typeTatble == 4) {
        $.each(data, function (key, item) {
            html += '<tr>';
            html += '<td>' + item.sRol_name + '</td>';
            html += '<td>' + item.sEmp_name + '</td>';
            html += '<td>' + item.sEmp_surname + '</td>';
            html += '<td>' + item.sEmp_document + '</td>';
            html += '<td>' + item.sEmp_phone + '</td>';
            html += '<td><button class="btn-floating waves-effect waves-light default" type="button" name="action" onclick=" selectDocument(' + item.sEmp_document + ',' + item.iEmp_id + ')"><i class="material-icons right">verified_user</i></button></td>';
            html += '</tr>';
        });
        $('#listEmployeeSearch  tbody').html(html);

    }
}
//Function  clean table 
function cleanTable() {
    var html = '';
    $('table  tbody').html(html);

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
function createSelctHtml(selectData,idSelect,nameSelect,data) { 

    let select = $('#' + idSelect);
    $(select).material_select('destroy');
    $(select).find("option").remove();
    //console.log(idSelect);
    select.append('<option value="" disabled selected>Elija su opción</option>');
    for (let i = 0; i < selectData.length; i++) {
        let id = selectData[i];
        let idOption;
        for (key in id) { 
            if (idSelect == key) {               
                idOption = id[key];    
            }
            if (nameSelect == key) {
                let option;
            
                if (typeof data != 'undefined') {
              
                    let res = data.split(",");
                   // console.log(typeof res);
         
                    if (res.indexOf(""+idOption)!=-1) {
                        option = '<option value="' + idOption + '" selected>' + id[key] + '</option>';
                    } else {
                        option = '<option value="' + idOption + '">' + id[key] + '</option>';
                    }

                   // console.log(option);
                } else {
                    option = '<option value="' + idOption + '">' + id[key] + '</option>';
                }
                select.append(option);
            }
            
        }
        
    }
    select.material_select();
    
        
}