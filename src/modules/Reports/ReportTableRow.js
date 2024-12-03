import React,{ useState } from "react"
import ReportQuickDetail from "./ReportComponent/ReportQuickDetail"
import Status from "../Components/Status"
import { findCircle } from "../../env"
import tabletrans from "../../translate/tables"

function ReportTableRow(props){ 
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
                  {findCircle(report.resultValue).value}
                  </div>

                <div className="cu-name">
                  <p className="name">{report.host}</p>
                  <p className="email">url: {report.url}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="cu-phone">
                <p className="phone-num">{report.agent}</p>
              </div>
            </td>
            <td>
              <div className="cu-company">
                <p>{report.responseCode}</p>
              </div>
            </td>
            <td>
              <div className="cu-role">
                <p>{report.remoteIp}</p>
              </div>
            </td>
            <td>
              <div className="cu-role">
              <div className="or-date">
                  <p className="date">{new Date(report.date)
                  .toLocaleDateString(props.lang==="persian"?'fa':'en')}</p>
                  <p className="time">{new Date(report.date)
                  .toLocaleTimeString(props.lang==="persian"?'fa':'en')}</p>
                </div>
              </div>
            </td>
            <td>
              <div className="pen-status order-status">
                <Status status={report.predict} lang={props.lang}/>
              </div>
            </td>
            <td>
            <div className="more-btn">
                <i className={`tableIcon fas ${activeAcc?"fa-chevron-up":"fa-chevron-down"}`} 
                  onClick={()=>props.showDetail(activeAcc?"-1":props.index)} ></i>
        
                <i className="tableIcon fas fa-ellipsis-v" 
                  onClick={()=>setOpenOption(openOption?0:1)}></i>
              {openOption?<div className="sub-more-menu">
                <div className="sub-option sub-delete">
                <i className="tableIcon fas fa-flag-o" style={{color: "#ff0000"}}></i>
                  <p>{tabletrans.report[props.lang]}</p>
                </div>
                <div className="sub-option sub-edit">
                  <i className="tableIcon fas fa-search"></i>
                  <p>{tabletrans.trace[props.lang]}</p>
                </div>
              </div>:<></>}
              </div>
              
            </td>
          </tr>
          {activeAcc?<tr className="sub-order">
          <td colSpan="9"><ReportQuickDetail report={report}/></td></tr>
            :<React.Fragment></React.Fragment>}
            </React.Fragment>
    )
}
export default ReportTableRow