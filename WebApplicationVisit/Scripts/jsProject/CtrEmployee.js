/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
//Declarate Variable 
var sNameTitle = "Empleado"
var oObjectUser;
var dataJson = new Object();
var typeTatble = 0;
//Start DOM html jQuery
$(document).ready(function () {

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
    _getList(0);
    _getListRol();
    _getListPermission();

});

//Function select Item 
function selectionItem(item) {
    let items = "#item_";
    for (var i = 0; i < 2; i++) {
        $(items + i).css('color', 'black');
    }
    $(items + item).css('color', '#29b6f6');
    selectionSubItems(item + "_0", " ", 0);

}
function selectionItem(item) {
    let items = item.replace("item", "subItem") + "_0";
    $('.collapsible - header').css('color', 'black');
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionSubItems(items, "0_0", false, false)
}
//Function select sub Items
function selectionSubItems(subItem, Form, cont_search) {

    let items = "#" + subItem + "";

    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = $(items).text();
    $('#titleForm ' + sNameTitle).text(text);


    if (cont_search) {
        $('#cont_search_' + Form).css("display", "block");
        disableEnableInput(Form, 0)
    } else {
        $('#cont_search_' + Form).css("display", "none");
        disableEnableInput(Form, 1)
    }
    selectForm(Form);


}
//Function select Item mobile
function selectionMitem(item) {
    let items = item.replace("mItem", "mSubItem") + "_0";
    $('.collapsible - header').css('color', 'black');
    $('.collapsible - header').css('color', 'black');
    $("#" + item + "").css('color', '#29b6f6');
    selectionMsubItems(items, "0_0", false, false)



}
//Function select sub Items Mobile
function selectionMsubItems(subItem, Form, cont_search, nav_mobile) {

    let items = "#" + subItem + "";

    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = $(items).text();
    $('#titleForm ' + sNameTitle).text(text);

    if (nav_mobile) {
        if ($('.button-collapse').is(":visible")) {
            $('.button-collapse').sideNav('hide');
        }
    }

    if (cont_search) {
        $('#cont_search_' + Form).css("display", "block");
        disableEnableInput(Form, 0)
    } else {
        $('#cont_search_' + Form).css("display", "none");
        disableEnableInput(Form, 1)
    }
    selectForm(Form);

}
//Function select form  
function selectForm(dataForm) {
    $(".form_select").css("display", "none");
    let form = '#form' + dataForm;
    $(form).fadeIn("slow");
    clearInput(form);
}
//Function validate create
//Load data of form
function validateCreate(e) {

    //Get data input text 

    e.preventDefault();//not reload page
}
//Load data of form
function validateUpdate(e) {

    //Get data input text 

    e.preventDefault();//not reload page
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
//Function get role
function _getListRol() {
    //debugger;
    $.ajax({
        url: "/Employee/ListUserSelectRole",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            let select = $('#listRole');
            select.append('<option value="" disabled selected>Elija su opción</option>');
            $.each(result, function (val, item) {
                select.append('<option value="' + val + '">' + item.sRol_name + '</option>');
            });
            select.material_select();
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
//Function get Permission 
function _getListPermission() {
    //debugger;
    $.ajax({
        url: "/Employee/ListUserSelectPermission",
        cache: false,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            let select = $('#listPermission');
            select.append('<option value="" disabled selected>Elija su opción</option>');
            $.each(result, function (val, item) {
                select.append('<option value="' + val + '">' + item.sPermission_name + '</option>');
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
        if (!bValidate) {
            alert("Vefirique la seleccion");
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
        if (!bValidate) {
            alert("Vefirique la seleccion");
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
            _getList();
        }
    }
    e.preventDefault();
}
//Function delete employeed 
function deleteEmployeed(id) {
    let value = confirm("Esta seguro de realizar esta acción");
    alert(id);
    /*if (value) {
        dataJson.iEmp_id = id;
        debugger;
        $.ajax({
            url: "/Employee/EmployeeDelete",
            cache: false,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            data: dataJson,
            dataType: "json",
            success: function (result) {
                console.log(result);
                if (result) {
                    searchEmployeeDelete(e);
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
  
    }*/

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
            html += '<td><button class="btn-floating waves-effect waves-light red" type="button" name="action" onclick="deleteEmployeed(' + item.iEmp_id + ')"><i class="material-icons right">verified_user</i></button></td>';
            html += '</tr>';
        });
        $('#listEmployeeDelete  tbody').html(html);

    }
}


