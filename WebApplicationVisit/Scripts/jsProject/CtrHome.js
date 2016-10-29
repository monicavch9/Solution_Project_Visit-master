/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
$(document).ready(function () {


    $('.button-collapse').sideNav();

    $('.button-collapseUser').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
    validateSession(document.URL);

});

//Function Get data user 
function loadDataUser(dataUser) {

    var dataUserObject = JSON.parse(dataUser);
    console.log(dataUserObject);
    $('#nameUser').text(dataUserObject.sEmp_name + " " + dataUserObject.sEmp_surname);
    $('#emailUser').text(dataUserObject.sEmp_mail);
    $('#role').text("Rol: " + dataUserObject.sRol_name);
    $('#phoneUser').text("Tel: " + dataUserObject.sEmp_phone);
    $('#phoneUser2').text("Tel2: " + dataUserObject.sEmp_phone2);
    $('#celUser').text("Cel: " + dataUserObject.sEmp_cell_phone);
    $('#celUser2').text("Cel2: " + dataUserObject.sEmp_cell_phone2);

}

function selctView(selctView) {

    window.location.assign("/" + selctView + "/" + selctView + "");
}
