import React,{ useState } from "react"
import Status from "../Components/Status"
import { findCircle } from "../../env"
import tabletrans from "../../translate/tables"

function ParkTableRow(props){ 
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const report=props.report
    return(<React.Fragment>
        <tr>
            <td className="checkBoxStyle">
              <input type="checkbox" name="" id="" checked={checkState}
              onChange={(e)=>setCheckState(checkState?false:true)}/></td>
            <td>
              <div className="cu-avatar">
                  <div className={findCircle(report.resultValue).class}>
                    {report.radif}
                  </div>

                <div className="cu-name">
                  <p className="name">{report.title}</p>
                  <p className="email">مدیر: {report.user}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="cu-phone">
                <p className="phone-num">{report.center}</p>
              </div>
            </td>
            <td>
              <div className="cu-company">
                <p title={report.idea}>
                  {report.idea?(report.idea.split(' ')[0]+ ' '+
                  report.idea.split(' ')[1]+ ' '+
                  report.idea.split(' ')[2]
                  ):''}...</p>
              </div>
            </td>
            <td>
              <div className="cu-role" style={{width:"250px"}}>
                <p>{report.groupDetail[0].title}</p>
                <p>{report.groupDetail[report.subgroup].title}</p>
              </div>
            </td>
            
          </tr>
            </React.Fragment>
    )
}
export default ParkTableRow