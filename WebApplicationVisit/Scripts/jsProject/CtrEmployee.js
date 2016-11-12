/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
//Declarate Variable 
var sNameTitle = "";
var oObjectUser;
var dataJson = new Object();
var objectEmployectJson = new Object();
var typeTatble = 0;
var typeSelectionUpdateCreate = "";
var textInfoForm;
var fromUpdateInsert;
var fromUpdateSearch;
//Start DOM html jQuery
$(document).ready(function () {

    textInfoForm = $('#textInfoForm');
    textInfoForm.css('color', 'red');
    $('.button-collapse').sideNav();
    selectionItem("item_0");
    $('.modal-trigger').leanModal();
   
    //validateSession(document.URL);
    //Load list
    $('select').material_select();
    $('#listSearchEmployeeUpdate').material_select();
    
    dataJson.bemp_state = true;
    dataJson.iBra_buis_id = 1;
    dataJson.bEmp_type_select = true;
    typeTatble = 0;
    //_getList();
    _getListRol();
    _getListBraBusiness();
    _loadView();
    
    
});
function _loadView() {
   
    objectEmployectJson.sEmp_permission="";
    objectEmployectJson.iEmp_id=0;
    objectEmployectJson.iRol_id=0;
    objectEmployectJson.iBra_buis_id=0;
    objectEmployectJson.sEmp_document="";
    objectEmployectJson.sEmp_name="";
    objectEmployectJson.sEmp_surname ="";
    objectEmployectJson.sEmp_phone="";
    objectEmployectJson.sEmp_phone2="";
    objectEmployectJson.sEmp_cell_phone="";
    objectEmployectJson.sEmp_cell_phone2="";
    objectEmployectJson.sEmp_addres="";
    objectEmployectJson.sEmp_mail="";
    objectEmployectJson.sEmp_mail2="";
    objectEmployectJson.sEmp_password ="";
    objectEmployectJson.bemp_state =true;
    objectEmployectJson.sEmp_photo ="";
    
}
//Function select Item 
function selectionItem(item) {
    let titleSelection = $('#' + item + '').attr("title");
    sNameTitle = titleSelection;
    let items = item.replace("item", "subItem") + "_0";
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionSubItems(items, "0_0", false, false);
    
}
//Function select sub Items
function selectionSubItems(subItem, Form, cont_search) {

    let items = "#" + subItem + "";
    fromUpdateSearch = "#form_search_" + Form;
    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");
    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = sNameTitle+" "+$(items).text();
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
    let items = item.replace("mItem","mSubItem")+"_0";
    $('.collapsible - header').css('color', 'black');
    $("#"+item+"").css('color', '#29b6f6');
    selectionMsubItems(items, "0_0", false, false)

    

}
//Function select sub Items Mobile
function selectionMsubItems(subItem, Form, cont_search, nav_mobile) {

    let items = "#" + subItem+"";
    fromUpdateSearch = "#form_search_" + Form;
    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = sNameTitle+" "+$(items).text();
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
    fromUpdateInsert = form;
}

//Function validate create
function createEmployee(data) {
    debugger;
    $.ajax({
        url: "Employee/EmployeeInsertUpdate",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: data,
        dataType: "json",
        success: function (result) {
            if (result == true) {
                textInfoForm.text("Accion realizada con exito");
                clearInput(fromUpdateInsert);
                console.log(fromUpdateInsert);
                //textInfoForm.text("");
            }
            else {
                textInfoForm.text("Se presento un inconveniente en el  proceso");
            }
           
          
        },
        error: function (errorMessage) {
        alert(errorMessage.responseText);
    }
    });
}
//Function validate Update
function UpdateEmployee(data) {
    debugger;
    $.ajax({
        url: "Employee/EmployeeInsertUpdate",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: data,
        dataType: "json",
        success: function (result) {
            if (result == true) {
                textInfoForm.text("Accion realizada con exito");
                console.log(fromUpdateInsert);
                clearInput("#form" + fromUpdateInsert);
                disableEnableInput(fromUpdateInsert, 0);
                disableEnableElementInput(fromUpdateSearch, 1);
       
            }
            else {
                textInfoForm.text("Se presento un inconveniente en el  proceso");
            }


        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Load data of form
function UpdateSearchEmployee(e,form) {
    let list = $("#listSearchEmployeeUpdate").val();
    let textSearch = $("#emp_search_update").val();
    let bValidate = true;
    fromUpdateInsert = form;

    typeTatble = 2;
    if (list == null ) {
        textInfoForm.text("Verifique la lista de busqueda");
        bValidate = false;
    } 
    else if (expressionData.test(textSearch) || textSearch.length == 0) {
        textInfoForm.text("Verifique la caja de busqueda");
        bValidate = false;
    }
    if(bValidate){
        textInfoForm.text("");
        dataJson.bEmp_type_select = false;
        switch (list) {
       
            case 'sEmp_document':
                dataJson.sEmp_document = textSearch;

                break;
            case 'sEmp_mail':
                dataJson.sEmp_mail = textSearch;

                break;
                
        }
        _getEmployee();
    }

        
    e.preventDefault();
}
//Load data of form
function validateDelete(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
//Load data of form
function validateSearch(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
//Function  validate text box
function validateTextBox(e,id) {


   /* let bValidate = true;
    let bValidateMail = false;
    let listTextBox = new Array();
    let listSelect = new Array();
    
   
    listTextBox[0] = $('#emp_name');
    listTextBox[1] = $('#emp_surname');
    listTextBox[2] = $('#emp_address');
    listTextBox[3] = $('#emp_document');

    let sMail = $('#emp_mail');
    let sMail_2 = $('#emp_mail2');

    let sPassword = $('#emp_password');
    let sPassword2 = $('#emp_password_confirm');



    listSelect[0] = $('#listPermission');
    listSelect[1] = $('#listBraBusiness');
    listSelect[2] = $('#listRole');
    $('input').removeClass('invalid');

    if (!validateBoxText(listTextBox) ) {
        
        textInfoForm.text("Verifique los datos de los contenidos");
        return false;
    }
    if (!validateBoxEmail(sMail)) {
        textInfoForm.text("Verifique los datos de su cuenta de correo mail 1");
        return false;
    } else {


        if (sMail_2.val().toLowerCase() === sMail.val().toLowerCase()) {
            textInfoForm.text("Los email deben ser diferentes");
            sMail_2.addClass('invalid');
            sMail.addClass('invalid');
            return false;
        }
        else if (sMail_2.val() != "" || sMail_2.val().length > 0) {

            let bValidateMail = (expressionEmail.test(sMail_2.val().toLowerCase())) ? false : true;

            if (bValidateMail) {
                sMail_2.addClass('invalid');
                textInfoForm.text("Verifique los datos de su cuenta de correo mail 2");
                return false;
            } 
        }
    }

   if (!validateBoxPassword(sPassword)) {
           textInfoForm.text('Tenga en cuenta :Mínimo 8 caracteres, máximo 15, al menos una letra mayúscula, al menos una letra minúscula, al menos un carácter, no espacios en blanco.');
           return false;
   } else if(!validateBoxPasswordConfirm(sPassword, sPassword2)){
            textInfoForm.text("Las constraseñas no coinciden ");
            return false;
       
   }
   if (!validateSelectList(listSelect)) {
                textInfoForm.text("Seleccione una opción de las listas");
                return false;
    
    }else if (listSelect[0].val().length < 1) {
        textInfoForm.text("Seleccione una opción de las listas");
        return false;
    } 
   

    if (bValidate) {

            textInfoForm.text("");
            $('input').removeClass('invalid');
            dataJson.iRol_id = parseInt(listSelect[2].val());
            dataJson.sEmp_name = listTextBox[0].val().toLowerCase();
            dataJson.sEmp_document = listTextBox[3].val().toLowerCase();
            dataJson.sEmp_surname = listTextBox[1].val().toLowerCase();
            dataJson.sEmp_phone = $('#emp_phone').val();
            dataJson.sEmp_phone2 = $('#emp_phone2').val();
            dataJson.sEmp_cell_phone = $('#emp_cel_phone').val();
            dataJson.sEmp_cell_phone2 = $('#emp_cel_phone2').val();
            dataJson.sEmp_addres = listTextBox[2].val().toLowerCase();
            dataJson.sEmp_mail = sMail.val().toLowerCase();
            dataJson.sEmp_mail2 = sMail_2.val().toLowerCase();
            dataJson.sEmp_password = sPassword.val();
            dataJson.sEmp_photo = $('#emp_photo').val().toLowerCase();
            dataJson.sEmp_permission = listSelect[0].val().toString();
            dataJson.iBra_buis_id = parseInt(listSelect[1].val());
           
            selectionStorages();
            return false;
    }
    else {
        alert("Valida la información");
        return false;


    }
    
    let formInputTel = $(form + " :input[type=tel]");
    let formInputText = $(form + " :input[type=text]");
    let formInputPassword = $(form + " :input[type=password]");
    let formInputMail = $(form + " :input[type=email]");
    let formInputSelect = $(form + " select");*/

    let form = '#' + id;
    //alert(formInputSelect.length);
    let validate = true;
        //Validate password input
        
   
//Validate text input
    if (!formInputText(form)) {
        validate = false;
    }
    if (validate && (!formInputTel(form))) {
        validate = false;
    }
    if (validate && (!formInputMail(form))) {
        validate = false;
    }
    if (validate && ($('#sEmp_mail2').val() != "" || $('#sEmp_mail2').val() != null))
    {
        if ($('#sEmp_mail2').val() == $('#sEmp_mail').val()) {
            validate = false;
            $('#sEmp_mail2').addClass('invalid');
            $('#sEmp_mail').addClass('invalid');
        }
    }
    if (validate && (!formInputPassword(form))) {
        validate = false;
    }
    if (validate && ($('#sEmp_password').val()!=$('#emp_password_confirm').val())) {
        validate = false;
       
        $('#sEmp_password').addClass('invalid');
        $('#emp_password_confirm').addClass('invalid');
    }
    if (validate && (!formInputSelect(form))) {
        validate = false;
    }
    if (validate) {
        $('input').removeClass('invalid');
        createObjectJson(id);
    }
    //alert(formInputPassword.length);
    e.preventDefault();
    
}
//Function  creaye  object
function createObjectJson(form_id) {
    let form = '#' + form_id;
    let formInput = $(form + " :input");
    let id;
    for (key in objectEmployectJson)
    {
        let data = $("#" + key).val();
        
        if (key == "sEmp_permission") {
            data = $("#" + key).val().toString();
        }
         if (key == "iEmp_id") {
            data = parseInt($("#" + key).val());
        }
        if (key == "iRol_id") {
            data = parseInt($("#" + key).val());
        }
        if (key == "iBra_buis_id") {
            data = parseInt($("#" + key).val());
        }
        if (key == "bemp_state") {
            data = true;
        }
  
            objectEmployectJson[key] = data;
        
        
        //console.log("Is " + key + " - " + objectEmployectJson[key]);
    }
    
    formInput.each(function (index) {
     
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        id = getId;
        //objectEmployectJson.id = 0;
        let text = getId.val();
       
    });
    console.log(objectEmployectJson);
}
//function  menu selection 
function selectionStorages() {
    debugger;
    switch (typeSelectionUpdateCreate) {
        case '0_0':
           
            break;
        case '0_1':
            createEmployee(dataJson);
            break;
        case '0_2':
            UpdateEmployee(dataJson);
            break;
        case '0_3':

            break;
    }
    console.log(typeSelectionUpdateCreate);
    
}

//Function database 
//Function get list user  
function _getList() {
    //debugger;   
    $.ajax({
        url: "/Employee/ListEmployee",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: dataJson,
        dataType: "json",
        success: function (result) {
            createTable(result);
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function get list user  
function _getEmployee() {
 
    $.ajax({
        url: "/Employee/ListEmployeeUpdate",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: dataJson,
        dataType: "json",
        success: function (result) {
   
            if (result.length > 0) {
                createTable(result);

            } else {
 
                clearInput("#form"+fromUpdateInsert);
                disableEnableInput(fromUpdateInsert, 0);
                disableEnableElementInput(fromUpdateSearch, 1);
                alert("No se encontraron datos");
            }
        },
        error: function (errorMessage) {
           // alert(errorMessage.responseText);
            
            alert("Se presento un inconveniente en  la comunicación ");
        }
    });
}
//Function get role
function _getListRol() {
    //debugger;
    $.ajax({
        url: "/Employee/ListRole",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            let select = $('#iRol_id');
            select.append('<option value="" disabled selected>Elija su opción</option>');
            $.each(result, function (val, item) {
                select.append('<option value="' + item.iRol_id + '">' + item.sRol_name + '</option>');
            });
            select.material_select();
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function get role
function _getListBraBusiness() {
    
    let obj = new Object();
    obj.iBus_id = 1;
    $.ajax({
        url: "/Business/ListBraBusiness",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: obj,
        dataType: "json",
        success: function (result) {
            let select = $('#iBra_buis_id');
            select.append('<option value="" disabled selected>Elija su opción</option>');
            $.each(result, function (val, item) {
                select.append('<option value="' + item.iBra_buis_id + '">' + item.sBra_buis_name + '</option>');
            });
            select.material_select();
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}

//Function  search employee
function searchEmployee(e) {
    
    let listSelection = $('#listSearchEmployee').val();
    let textSearch = $("#emp_search").val();
    typeTatble = 0;
    let bValidate = true;
    if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection == null)) {
        dataJson.bEmp_type_select = true;
       
        _getList();
 
    } else {
        if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection != null)) {
            bValidate = false;   
        }
        if ((!expressionData.test(textSearch) || textSearch.length != 0) && (listSelection == null)) {
            bValidate = false;
        }
        if(!bValidate) {
            alert("Vefirique la seleccion");           
        }else{
            dataJson.bEmp_type_select = false;
            switch (listSelection) {
                case 'sEmp_name':
                    dataJson.sEmp_name = textSearch;
      
                    break;
                case 'sEmp_surname':
                    dataJson.sEmp_surname = textSearch;
              
                    break;
                case 'sEmp_document':
                    dataJson.sEmp_document = textSearch;
                
                    break;
                case 'sEmp_mail':
                    dataJson.sEmp_mail = textSearch;
                  
                    break;
                case 'sRol_name':
                    dataJson.sEmp_mail = textSearch;
                    
                    break;   
            }
            _getList();
        }
    }
    e.preventDefault();
}
//Fuction search employeed delete 
function searchEmployeeDelete(e) {
    let listSelection = $('#listSearchEmployeeDelete').val();
    let textSearch = $("#emp_search_delete").val();
    typeTatble = 1;
    let bValidate = true;
    if (listSelection == null) {
        textInfoForm.text("Verifique la lista de busqueda");
        bValidate = false;
    }
    else if (expressionData.test(textSearch) || textSearch.length == 0) {
        textInfoForm.text("Verifique la caja de busqueda");
        bValidate = false;
    }


        if (bValidate)  {
            dataJson.bEmp_type_select = false;
            switch (listSelection) {
              
                case 'sEmp_document':
                    dataJson.sEmp_document = textSearch;

                    break;
                case 'sEmp_mail':
                    dataJson.sEmp_mail = textSearch;

                    break;
            }
            _getList();
        }
        e.preventDefault();
    }
 

//Function delete employeed 
function deleteEmployeed(id,e) {
    let value = confirm("Esta seguro de realizar esta acción");
    debugger;
    dataJson.iEmp_id = id;
    console.log(dataJson);
    if (value) {
        $.ajax({
            url: "/Employee/EmployeeDelete",
            cache: false,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            data: dataJson,
            dataType: "json",
            success: function (result) {
                console.log(result);
                if (result==true) {
                    alert("Empleado eliminado con exito");
                    cleanTable("listEmployeeDelete");
                }
                else {
                    alert("Se presento un error al realizar esta  acción");
                }
            },
            error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
    } else {
        
    }
   
}



