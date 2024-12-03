import { useState } from "react";
import tabletrans from "../../translate/tables"
import ReportTableRow from "./ReportTableRow";

function ReportTable(props){
  const reportList = props.reportList
  const lang=props.lang.lang;
  const [detail,showDetail] = useState(-1)
    return( 
        <table>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id=""/></th>
            <th>
              <p>{tabletrans.url[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.agent[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.ResponseCode[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.ip[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.date[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.status[lang]}</p>
              <i></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(reportList&&reportList.filter)?reportList.filter.map((report,i)=>(
            <ReportTableRow detail={detail} showDetail={showDetail} 
            report={report} index={i} key={i} lang={lang}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default ReportTable