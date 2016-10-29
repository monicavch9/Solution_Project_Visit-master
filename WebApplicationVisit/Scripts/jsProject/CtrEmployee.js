/*
**********************************************
Create :DIEGO CASALLAS
Date :26/10/2016

*/
//Declarate Variable 
var sNameTitle="Empleado"
//Start DOM html jQuery
$(document).ready(function () {


    $('.button-collapse').sideNav();
    selectionItem(0);
    $('.modal-trigger').leanModal();
    $('select').material_select();
  //validateSession(document.URL);

});

//Function select Item 
function selectionItem(item) {
    let items = "#item_";
    for (var i = 0; i < 2; i++) {
        $(items+i).css('color', 'black');
    }
    $(items + item).css('color', '#29b6f6');
    selectionSubItems(item + "_0"," ", 0);
  
}
//Function select sub Items
function selectionSubItems(subItem,Form,typeSelection) {
    let items = "#subItem_" + subItem;
 
    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
   
    let text = $(items).text();
    $('#titleForm').text(sNameTitle+" "+text);
    
   
    if (Form != " ") {
        subItem = Form;
    }
    if (typeSelection != 0) {
        $('#cont_search_' + subItem).css("display", "block");
        disableEnableInput(subItem, 0)
    } else {
        $('#cont_search_' + subItem).css("display", "none");
        disableEnableInput(subItem, 1)
    }
    selectForm(subItem);


}
//Function select Item mobile
function selectionMitem(item) {
    let items = "#mItem_";
    
    for (var i = 0; i < 2; i++) {
        $(items + i).css('color', 'black');
    }
    $(items + item).css('color', '#29b6f6');
    selectionMsubItems(item + "_0", item);


}
//Function select sub Items Mobile
function selectionMsubItems(subItem,item) {
    
    let items = "#mSubItem_" + subItem;

    $('.collection-item').css("background-color", "#fff");
    $('.collection-item').css("color", "#26a69a");

    $(items).css("background-color", "#26a69a");
    $(items).css("color", "#eafaf9");
    let text = $(items).text();
    $('#titleForm').text(text);
 
    if (typeof item == 'undefined') {
        if ($('.button-collapse').is(":visible")) {
            $('.button-collapse').sideNav('hide');
        }
    }

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
