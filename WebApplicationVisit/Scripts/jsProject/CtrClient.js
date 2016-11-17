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
    dataJson.sCli_bus_document = "";
    dataJson.sCli_bus_name = "";
    
    typeTatble = 0;
    _loadViewObject(1);
    _getListCountry();
    $('.per_user_1').click(function () {
        closeContent();
    });
    $('#mSubItem_0_0').click(function () {
        //enableButton(0);
        cleanTable();
    });
    $('#subItem_0_0').click(function () {
        //enableButton(0);
        cleanTable();
    });
    $('#iCont_id').change(function () {
        _getListCity(parseInt($(this).val()));
    });

});
function closeContent() {
    $('#contSearchEmployee').slideUp("slow", function () {
        $('#contSearchEmployee').css('display', 'none');
    });
    cleanTable();
}

//Function validate create
function createClient(data) {
   
    $.ajax({
        url: "Client/InsertUpdateClit",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: data,
        dataType: "json",
        success: function (result) {
            if (result == true) {
                textInfoForm.text("Accion realizada con exito");
                clearInput("#form" + fromUpdateInsert);
                closeContent();
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
 
    fromUpdateInsert = id.replace('form_create_update_', '');;

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
    if (validate && ($('#sBra_com_mail2').val() != "" || $('#sBra_com_mail2').val() != null)) {
        if ($('#sBra_com_mail').val() == $('#sBra_com_mail2').val()) {
            validate = false;
            textInfoForm.text("Los emailes deben ser diferentes ");
            $('#sBra_com_mail2').addClass('invalid');
            $('#sBra_com_mail').addClass('invalid');
        }
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
   
    let form = '#' + form_id;
    let formInput = $(form + " :input");
    let id;
    for (key in objectCliJson) {
        let data = $("#" + key).val();

        if (key == "iCont_id") {
        
            data = parseInt($("#" + key).val());
        }
        if (key == "iCit_id") {

            data = parseInt($("#" + key).val());
        }
        if (key == "iEmp_id") {
            data = parseInt($("#" + key).val());
        }
        if (key == "iBra_buis_id") {
            data = parseInt($("#" + key).val());
        }
        if (key == "iCli_state") {
            data = true;
        }
        if (key == "bBra_off_state") {
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
            objectCliJson.bBra_off_state = true;
            createClient(objectCliJson);
            break;
        case '0_2':
            
            enableButton(0);
            console.log(objectCliJson);
            //UpdateEmployee(objectCliJson);
            //loadSelect();
            break;
        case '0_3':

            break;
    }


}


//Function database 
//Function get list  Client
function _getListClientSelect() {
    console.log(dataJson);
    $.ajax({
        url: "/Client/ListClitSelect",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        data: dataJson,
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                createTable(result);
                textInfoForm.text("");
            } else {
                textInfoForm.text("No se encontraron datos");
                cleanTable();
            }
            enableButton(1);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
            enableButton(1);
        }
    });
}
//Function get list employee  
function _getListEmployee() {
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
//Function get country
function _getListCountry() {
    $.ajax({
        url: "/Client/ListCountry",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            objectEmployeeList[0] = result;
            createSelctHtml(result, 'iCont_id', 'sCont_name');
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function get country
function _getListCity(idCountry) {
    $.ajax({
        url: "/Client/ListCitys",
        cache: false,
        type: "GET",
        data:{'idCountry':idCountry},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            objectEmployeeList[0] = result;
            createSelctHtml(result, 'iCit_id', 'sCit_name');
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Fuction search client delete 
function searchClient(e) {
    let listSelection = $('#listSearchClient').val();
    let textSearch = $("#cli_search").val();
    typeTatble = 3;
    dataJson.sCli_bus_document = "";
    dataJson.sCli_bus_name = "";
    let bValidate = true;
    textInfoForm.text("");
    if (listSelection == null) {
    
        textInfoForm.text("Verifique la lista de busqueda");
        bValidate = false;
    }
    else if (expressionData.test(textSearch) || textSearch.length == 0) {
        if (listSelection != 'all') {
            textInfoForm.text("Verifique la caja de busqueda");
            bValidate = false;
        } else {
            enableButton(0)
            _getListClientSelect();
            bValidate = false;
        }
    }


    if (bValidate) {
        dataJson.bEmp_type_select = false;
        switch (listSelection) {

            case 'sCli_bus_name':
                dataJson.sCli_bus_name = textSearch;

                break;
            case 'sCli_bus_document':
                dataJson.sCli_bus_document = textSearch;

                break;
        }
        enableButton(0)
        _getListClientSelect();
    } 
    e.preventDefault();
}


//Function select document
function selectDocument(document,id) {
 
    $('#sEmp_document').val(document);
    $('#sEmp_document').addClass('valid');
    $('label[for="sEmp_document"]').addClass('active');
    $('#iEmp_id').val(parseInt(id));
   
}

function loadSelect() {
    createSelctHtml(objectEmployeeList[0], 'iRol_id', 'sRol_name');
    createSelctHtml(objectEmployeeList[1], 'iBra_buis_id', 'sBra_buis_name');
    createSelctHtml(objectEmployeeList[2], 'sEmp_permission', 'sPer_name');
}

function viewContSearch(form) {

    let cont = $('#contSearchEmployee');
    disableEnableElementInput(form, 1);
    if (cont.is(':visible')) {
        cont.slideUp("slow", function () {
            cont.css('display','none');
        });
    } else {
        cont.fadeIn("slow", function () {
            cont.slideDown("slow");
        });
       
    }
}


//Function  search employee
function searchEmployee(e) {

    let list = $("#ListSearchEmployee").val();
    let textSearch = $("#search_employee").val();
    let bValidate = true;
    typeTatble = 4;
    if (list == null) {
        textInfoForm.text("Verifique la lista de busqueda");
        bValidate = false;
    }
    else if (expressionData.test(textSearch) || textSearch.length == 0) {
        textInfoForm.text("Verifique la caja de busqueda");
        bValidate = false;
    }


    if (bValidate) {
        dataJson.bEmp_type_select = false;
        switch (list) {

            case 'sEmp_document':
                dataJson.sEmp_document = textSearch;

                break;
            case 'sEmp_mail':
                dataJson.sEmp_mail = textSearch;

                break;

        }

        enableButton(0);
        //console.log(dataJson);
        textInfoForm.text("");
        _getListEmployee();

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

