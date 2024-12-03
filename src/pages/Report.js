import { useEffect, useState } from "react"
import env from "../env"
import Cookies from 'universal-cookie';
import errortrans from "../translate/error";
import StatusBar from "../modules/Components/StatusBar";
import ReportFilters from "../modules/Reports/ReportComponent/ReportFilters";
import ReportTable from "../modules/Reports/ReportTable";
import Paging from "../modules/Components/Paging";
import { useParams } from 'react-router-dom';
import ReportTableOS from "../modules/Reports/ReportTableOS";
const cookies = new Cookies();
 
function Report(props) {
  const direction = props.lang ? props.lang.dir : errortrans.defaultDir;
  const lang = props.lang ? props.lang.lang : errortrans.defaultLang;
  const token = cookies.get(env.cookieName)
  const { mode } = useParams();

  const [content, setContent] = useState('')
  const [filters, setFilters] = useState({})
  console.log(filters)
  useEffect(() => {
    const body = {
      offset: filters.offset ? filters.offset : "0",
      pageSize: filters.pageSize ? filters.pageSize : "10",
      customer: filters.customer,
      category: filters.category,
      orderNo: filters.orderNo,
      predict: filters.predict,
      brand: filters.brand,
      dateFrom: filters.date && filters.date.dateFrom,
      dateTo: filters.date && filters.date.dateTo,
      access: "manager"
    }
    const postOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": token && token.token, "userId": token && token.userId
      },
      body: JSON.stringify(body)
    }
    console.log(postOptions)
    fetch(env.siteApi + `/report/${mode==="service"?"web":
      "os"}Service-list-report`, postOptions)
      .then(res => res.json())
      .then(
        (result) => {
          setContent('')
          
          setTimeout(() => setContent(result), 200)
        },
        (error) => {
          console.log(error);
        }

      )
  }, [filters])

  return (
    <div>
      {(() => {
        if (mode == "service") {
          return (
            <div className="user" style={{ direction: direction }}>
              <h4>Web {mode} statistics</h4>
              <div className="list-container">
                <StatusBar />
                <ReportFilters lang={props.lang} setFilters={setFilters}
                  options={content.access} />
                <div className="user-list">
                  <ReportTable reportList={content} lang={props.lang} />
                </div>
                <Paging content={content} setFilters={setFilters} filters={filters}
                  lang={props.lang} />
              </div>
            </div>

          )
        } else if (mode == "systems") {
          return (
            <div className="user" style={{ direction: direction }}>
              <h4> Statistics {mode}</h4>
              <div className="list-container">
                <StatusBar />
                <ReportFilters lang={props.lang} setFilters={setFilters}
                  options={content.access} />
                <div className="user-list">
                  <ReportTableOS reportList={content} lang={props.lang} />
                </div>
                <Paging content={content} setFilters={setFilters} filters={filters}
                  lang={props.lang} />
              </div>
            </div>
          )
        } else if (mode == "devices"){
          
          return (
            <div className="user" style={{ direction: direction }}>
            <h4>Statistics of {mode}</h4>
            <div className="list-container">
              <StatusBar />
              <ReportFilters lang={props.lang} setFilters={setFilters}
                options={content.access} />
              <div className="user-list">
                <ReportTable reportList={content} lang={props.lang} />
              </div>
              <Paging content={content} setFilters={setFilters} filters={filters}
                lang={props.lang} />
            </div>
          </div>
          )
        }
      })()}



    </div>
  )
}
export default Report