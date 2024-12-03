import { useState } from "react";
import tabletrans from "../../translate/tables"
import ParkTableRow from "./ParkTableRow";

function ParkTable(props){
  const reportList = props.reportList
  const lang=props.lang.lang;
  const [detail,showDetail] = useState(-1)
    return( 
        <table>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id=""/></th>
            <th>
              <p>نام هسته/ واحد فناور</p>
              <i></i>
            </th>
            <th>
              <p>نام پارک</p>
              <i></i>
            </th>
            <th>
              <p>ايده/طرح محوري</p>
              <i></i>
            </th>
            <th>
              <p>گروه/زیرگروه</p>
              <i></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(reportList&&reportList.filter)?reportList.filter.map((report,i)=>(
            <ParkTableRow detail={detail} showDetail={showDetail} 
            report={report} index={i} key={i} lang={lang}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default ParkTable