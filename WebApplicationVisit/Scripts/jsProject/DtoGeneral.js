/*
objectVisitJson.iVis_id;
objectVisitJson.iBra_off_id;
objectVisitJson.iVis_address;
//
objectVisitJson.iCli_bus_document;
objectVisitJson.sBra_off_address;
//
objectVisitJson.iIt_has_activities;
objectVisitJson.iDe_vis_id;
objectVisitJson.sVis_date;
objectVisitJson.svis_atte_mail;
objectVisitJson.sVis_atte_phone;
objectVisitJson.sVis_atte_celphone;
objectVisitJson.sVis_atte_name;
objectVisitJson.sVis_atte_competition;
objectVisitJson.sVis_atte_position;
objectVisitJson.sVis_observation;
objectVisitJson.sVis_com_;
objectVisitJson.sVis_com_date;
objectVisitJson.sVis_proy_name;
objectVisitJson.sVis_activity_description;
//
objectVisitJson.sDe_vis_name ;
objectVisitJson.sDe_vis_description;*/
const objectEmployeeJson = new Object();
function _loadViewObject(select)
{
    
    switch(select){
        case 0:
            objectEmployeeJson.iRol_id = 0;
            objectEmployeeJson.iPermission_id = 0;
            objectEmployeeJson.sEmp_permission = "";
            objectEmployeeJson.iEmp_id = 0;
            objectEmployeeJson.sRol_name = "";
            objectEmployeeJson.sPermission_name = "";
            objectEmployeeJson.iBra_buis_id = 0;
            objectEmployeeJson.sEmp_document = "";
            objectEmployeeJson.sEmp_name = "";
            objectEmployeeJson.sEmp_surname = "";
            objectEmployeeJson.sEmp_phone = "";
            objectEmployeeJson.sEmp_phone2 = "";
            objectEmployeeJson.sEmp_cell_phone = "";
            objectEmployeeJson.sEmp_cell_phone2 = "";
            objectEmployeeJson.sEmp_addres = "";
            objectEmployeeJson.sEmp_mail = "";
            objectEmployeeJson.sEmp_mail2 = "";
            objectEmployeeJson.sEmp_password = "";
            objectEmployeeJson.bemp_state = true;
            objectEmployeeJson.sEmp_photo = "";

        break;
    }
}