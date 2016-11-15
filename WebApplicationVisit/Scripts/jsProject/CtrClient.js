/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
//Declarate Variable 
var sNameTitle = "";
var oObjectUser;
var dataJson = new Object();
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
    dataJson.bemp_state = true;
    dataJson.iBra_buis_id = 1;
    dataJson.bEmp_type_select = true;
    typeTatble = 0;
    _loadViewObject(1);
    _getList();
    _getListRol();
    _getListBraBusiness();
    _getListPermission();

    $('#mSubItem_0_0').click(function () {

        //enableButton(0);
        cleanTable();


    });
    $('#subItem_0_0').click(function () {

        //enableButton(0);
        cleanTable();


    });

});


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
                clearInput("#form" + fromUpdateInsert);


            }
            else {
                textInfoForm.text("Se presento un inconveniente en el  proceso");


            }

            enableButton(1);
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
            enableButton(1);
        }
    });
}
//Function validate Update
function UpdateEmployee(data) {

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

            enableButton(1);
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
            enableButton(1);
        }
    });
}
//Load data of form
function UpdateSearchEmployee(e, form) {
    let list = $("#listSearchEmployeeUpdate").val();
    let textSearch = $("#emp_search_update").val();
    let bValidate = true;

    form = form.replace('form_search_', '');
    //console.log(form);
    fromUpdateInsert = form;

    typeTatble = 2;
    if (list == null) {
        textInfoForm.text("Verifique la lista de busqueda");
        bValidate = false;
    }
    else if (expressionData.test(textSearch) || textSearch.length == 0) {
        textInfoForm.text("Verifique la caja de busqueda");
        bValidate = false;
    }
    if (bValidate) {
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

//Function  validate text box
function validateTextBox(e, id) {

    let form = '#' + id;
    let validate = true;


    if (!formInputText(form)) {
        validate = false;
        textInfoForm.text("Verifique las cajas de texto ");
    }
    if (validate && (!formInputTel(form))) {
        validate = false;
        textInfoForm.text("Verifique las cajas de texto");
    }
    if (validate && (!formInputMail(form))) {
        validate = false;
        textInfoForm.text("Verifique los datos de su cuenta de correo mail");
    }
    if (validate && ($('#sEmp_mail2').val() != "" || $('#sEmp_mail2').val() != null)) {
        if ($('#sEmp_mail2').val() == $('#sEmp_mail').val()) {
            validate = false;
            textInfoForm.text("Los emailes deben ser diferentes ");
            $('#sEmp_mail2').addClass('invalid');
            $('#sEmp_mail').addClass('invalid');
        }
    }
    if (validate && (!formInputPassword(form))) {
        validate = false;
        textInfoForm.text('Tenga en cuenta: Mínimo 8 caracteres, máximo 15, al menos una letra mayúscula, al menos una letra minúscula, al menos un carácter, no espacios en blanco.');
    }
    if (validate && ($('#sEmp_password').val() != $('#emp_password_confirm').val())) {
        validate = false;
        textInfoForm.text("Las constraseñas no coinciden ");

        $('#sEmp_password').addClass('invalid');
        $('#emp_password_confirm').addClass('invalid');
    }
    if (validate && (!formInputSelect(form))) {
        validate = false;
        textInfoForm.text("Seleccione una opción de las listas");

    }
    if (validate) {
        $('input').removeClass('invalid');
        createObjectJson(id);
        textInfoForm.text("");
    }
    e.preventDefault();


}

//Function  create  object
function createObjectJson(form_id) {
    console.log(form_id);
    let form = '#' + form_id;
    let formInput = $(form + " :input");
    let id;
    for (key in objectCliJson) {
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
        objectCliJson[key] = data;

    }

    /*formInput.each(function (index) {
     
        // For debugging purposes...
        let getId = $("#" + $(this).attr('id'));
        id = getId;
        console.log(id);
        //objectEmployectJson.id = 0;
        let text = getId.val();
       
    });*/
    // console.log(objectCliJson);
    selectionStorages();
}
//function  menu selection 
function selectionStorages() {

    console.log(typeSelectionUpdateCreate);
    switch (typeSelectionUpdateCreate) {
        case '0_0':

            break;
        case '0_1':
            enableButton(0);
            createEmployee(objectCliJson);
            loadSelect();
            break;
        case '0_2':

            enableButton(0);
            UpdateEmployee(objectCliJson);
            loadSelect();
            break;
        case '0_3':

            break;
    }
    //console.log(typeSelectionUpdateCreate);

}
//Function database 
//Function get list user  
function _getList() {
    $.ajax({
        url: "/Employee/ListEmployee",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: dataJson,
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                createTable(result);
            } else {
                textInfoForm.text("No se encontraron datos");
            }
            enableButton(1);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
            enableButton(1);
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
            // console.log(result);
            if (result.length > 0) {
                createTable(result);
                textInfoForm.text("");
            } else {

                clearInput("#form" + fromUpdateInsert);
                disableEnableInput(fromUpdateInsert, 0);
                disableEnableElementInput(fromUpdateSearch, 1);
                textInfoForm.text("No se encontraron datos");

            }
            enableButton(1);
        },
        error: function (errorMessage) {
            textInfoForm.text("Se presento un inconveniente en  la comunicación");

            enableButton(1);

        }
    });
}
//Function get role
function _getListRol() {
    $.ajax({
        url: "/Employee/ListRole",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            objectEmployeeList[0] = result;
            createSelctHtml(result, 'iRol_id', 'sRol_name');
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
            objectEmployeeList[1] = result;
            createSelctHtml(result, 'iBra_buis_id', 'sBra_buis_name');

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });

}
function _getListPermission() {
    let permissionArrya = new Array();
    var objectPermission = new Object();
    objectPermission.sEmp_permission = 0;
    objectPermission.sPer_name = "Crear";
    permissionArrya[0] = objectPermission;
    objectPermission = new Object();
    objectPermission.sEmp_permission = 1;
    objectPermission.sPer_name = "Modificar";
    permissionArrya[1] = objectPermission;
    objectPermission = new Object();
    objectPermission.sEmp_permission = 2;
    objectPermission.sPer_name = "Eliminar";
    permissionArrya[2] = objectPermission;
    objectPermission = new Object();
    objectPermission.sEmp_permission = 3;
    objectPermission.sPer_name = "Buscar";
    permissionArrya[3] = objectPermission;
    createSelctHtml(permissionArrya, 'sEmp_permission', 'sPer_name');
    objectEmployeeList[2] = permissionArrya;

}



//Function  search employee
function searchEmployee(e) {


    let listSelection = $('#listSearchEmployee').val();
    let textSearch = $("#emp_search").val();
    typeTatble = 0;
    let bValidate = true;
    if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection == null)) {
        dataJson.bEmp_type_select = true;
        enableButton(0);
        _getList();
        textInfoForm.text("");

    } else {
        textInfoForm.text(listSelection);
        if (listSelection != 'sGeneral') {
            if ((expressionData.test(textSearch) || textSearch.length == 0) && (listSelection != null)) {
                bValidate = false;
            }
            if ((!expressionData.test(textSearch) || textSearch.length != 0) && (listSelection == null)) {
                bValidate = false;
            }
            if (!bValidate) {
                textInfoForm.text("Verifique la selección ");

            } else {
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

                enableButton(0);
                _getList();
            }

        }
        else {
            dataJson.bEmp_type_select = true;
            enableButton(0);
            _getList();
        }
    }
    textInfoForm.text("");
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


    if (bValidate) {
        dataJson.bEmp_type_select = false;
        switch (listSelection) {

            case 'sEmp_document':
                dataJson.sEmp_document = textSearch;

                break;
            case 'sEmp_mail':
                dataJson.sEmp_mail = textSearch;

                break;
        }
        enableButton(0)
        _getList();
    }
    e.preventDefault();
}

//Function delete employeed 
function deleteEmployeed(id, e) {
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
                if (result == true) {


                    textInfoForm.text("Empleado eliminado con exito");
                    cleanTable("listEmployeeDelete");


                }
                else {
                    textInfoForm.text("Se presento un error al realizar esta  acción");
                }
                enableButton(1);
            },
            error: function (errorMessage) {
                enableButton(1);
                alert(errorMessage.responseText);
            }
        });
    } else {

    }

}


function loadSelect() {
    createSelctHtml(objectEmployeeList[0], 'iRol_id', 'sRol_name');
    createSelctHtml(objectEmployeeList[1], 'iBra_buis_id', 'sBra_buis_name');
    createSelctHtml(objectEmployeeList[2], 'sEmp_permission', 'sPer_name');
}
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
