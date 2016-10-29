using Aplication_Visit.Controllers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace Aplication_Visit.Models
{
    public class CtrlNotification
    {

        private String sHtml;
        private String sToMail;
        private String sFrom;
        private String sSubject;
        private SmtpClient smtp = null;
        private MailMessage msg = null;

        public CtrlNotification(DtoEmployee  empl, String sFrom, String sSubject) {

            this.sHtml = ArmStructureHtml(empl.sEmp_name + " " + empl.sEmp_surname, empl.iEmp_id);
            this.sToMail = empl.sEmp_mail;
            this.sFrom = sFrom;
            this.sSubject = sSubject;
            
        }
        private String ArmStructureHtml(String sName, int sId)
        {

            string sHtmlMail = "<!DOCTYPE html><html><head>" + "<meta http-equiv = 'Content-Type' content ='text/html; charset=utf-8'/><meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0'/>"
           + "<title> Login </title><style type='text/css'>html, body {padding:0;margin:0;height:100%;}"
           + "header{background:#303F9F;width:100%; height:10%;}"
           + "section {background:#FFFFFF;width:90%;height:60%;margin:auto;}"
           + "footer {background:#3F51B5;width:50%;margin:auto;height:auto;}"
           + "p{color: white;width: auto;margin: auto;text-align:center;}"
           + ".table {width:100%;margin:auto;text-align:left;}"
           + "</style ></head><body><header><img src='https://lh3.googleusercontent.com/-JLPZ5nn4o_Q/AAAAAAAAAAI/AAAAAAAAAAA/AKTaeK964MKeZVtQrNauy8X_BJUDegZZ0w/mo/photo.jpg?sz=120'>"
           + "</header><section><table class='table'><caption><b>Señ@r :'" + sName + "'</b> </caption><tr><th>Ingrese al  siguiente link  para realizar  este procedimiento: </th></tr><tr><td><a href = 'http://webapplicationvisit.azurewebsites.net/NewPassword/ChangePassword?data=" + sId + "'> Cambio de contraseña</a></td></tr></table></section><footer><p>Sinapsis Soft</p></footer></body></html>";

            return sHtmlMail;
        }

        public bool SendMail() {
            msg = new MailMessage();
            msg.To.Add(sToMail);//mail To
            msg.From = new MailAddress("sinapsissof@gmail.com", sFrom, System.Text.Encoding.UTF8);
            msg.Subject = sSubject;//
            msg.SubjectEncoding = System.Text.Encoding.UTF8;
            msg.Body = sHtml;
            msg.BodyEncoding = System.Text.Encoding.UTF8;

            msg.IsBodyHtml = true;//text html 
            smtp = new SmtpClient();
            smtp.Credentials = new System.Net.NetworkCredential("diehercasvan@gmail.com", "alipwxmtbxjiruam");
            smtp.Port = 587;
            smtp.Host = "smtp.gmail.com";//validate gmail smtp aplication 
            smtp.EnableSsl = true;//Obligate SSl 

            try
            {
                smtp.Send(msg);

                return true;
            }
            catch (IOException e)
            {
                Console.WriteLine("Error", e.Source);
                return false;
            }
           
        }
    }
}