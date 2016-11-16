using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
            throw new NotImplementedException();
        }

        public List<DtoClient> ListClit(DtoClient clit)
        {
            throw new NotImplementedException();
        }

        public List<DtoClient> ListClitSelect(DtoClient clit)
        {
            throw new NotImplementedException();
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