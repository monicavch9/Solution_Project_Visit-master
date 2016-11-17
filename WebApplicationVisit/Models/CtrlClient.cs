using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;

namespace WebApplicationVisit.Models
{
    public class CtrlClient : IntClient
    {
        
        public bool DeleteClit(DtoClient clit)
        {
            throw new NotImplementedException();
        }

        public bool InsertUpdateClit(DtoClient clit)
        {
            Entities_Visit ctx;
            bool bResult = false;
            using (ctx = new Entities_Visit() ) {
                try
                {
                    var query = ctx.PR_INSERT_UPDATE_CLIENT
                        (
                         clit.sCli_bus_name, clit.sCli_bus_document, clit.sCli_bus_type, clit.iCit_id, clit.iEmp_id,
                         clit.sBra_off_phone, clit.sBra_off_address, clit.sBra_com_name, clit.sBra_com_phone, clit.sBra_com_mail,
                         clit.sBra_com_mail2
                         );
                    // int result =Int32.Parse(query.ToString());
                    bResult = true;
                }
                catch (Exception e)
                {

                    bResult = false;
                }

            }
            return bResult;
        }

        public List<DtoClient> ListClit(DtoClient clit)
        {
            throw new NotImplementedException();
        }

        public List<DtoClient> ListClitSelect(DtoClient clit)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {
                List<DtoClient> list = new List<DtoClient>();
                DtoClient objClient;
                try
                {
                    var query = ctx.PR_SEARCH_CLIENT_SELECTION(clit.sCli_bus_document, clit.sCli_bus_name);
                    foreach (var client in query)
                    {
                        objClient = new DtoClient();
                        objClient.sCli_bus_name = client.CLI_BUS_NAME;
                        objClient.sCli_bus_document = client.CLI_BUS_DOCUMENT;
                        objClient.sCit_name = client.CIT_NAME;
                        objClient.sCont_name = client.CONT_NAME;
                        objClient.sBra_off_address = client.BRA_OFF_ADDRESS;
                        objClient.sBra_off_phone = client.BRA_OFF_PHONE;
                     
                        list.Add(objClient);
                    }
                    list.ToList();
                }
                catch (Exception e)
                {
                }
                return list;
            }
           
        }
        public List<DtoClient> ListCountry()
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listCountry = (from coun in ctx.COUNTRY

                                select new DtoClient()
                                {

                                    iCont_id = coun.CONT_ID,
                                    sCont_name = coun.CONT_NAME

                                }
                                    ).ToList();

                return listCountry;
            }

        }

        public List<DtoClient> ListCitys(int idCountry) {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listCitys = (from city in ctx.CITIES
                                 where city.CONT_ID== idCountry
                                 select new DtoClient()
                                   {

                                       iCit_id = city.CIT_ID,
                                       sCit_name = city.CIT_NAME

                                   }
                                    ).ToList();

                return listCitys;
            }
        }
    }
}