/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
$(document).ready(function () {
    //$(".button-collapse").sideNav();
    //alert("Hola");
    _getList();

});
function _getList() {
    //debugger;
    $.ajax({

        url: "/Home/ListEmployee",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.iRol_id + '</td>';
                html += '<td>' + item.iBra_buis_id + '</td>';
                html += '<td>' + item.sEmp_document + '</td>';
                html += '<td>' + item.sEmp_name + '</td>';
                html += '<td>' + item.sEmp_surname + '</td>';
                html += '<td>' + item.sEmp_phone + '</td>';
                html += '<td>' + item.sEmp_phone2 + '</td>';
                html += '<td>' + item.sEmp_cell_phone + '</td>';
                html += '<td>' + item.sEmp_cell_phone2 + '</td>';
                html += '<td>' + item.sEmp_addres + '</td>';
                html += '<td>' + item.sEmp_mail + '</td>';
                html += '<td>' + item.sEmp_mail2 + '</td>';
                html += '</tr>';
            });
            $('#listEmployee  tbody').html(html);
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}