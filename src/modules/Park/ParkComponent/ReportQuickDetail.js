import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function ReportQuickDetail(props){
    const report = props.report
    const [request,setRequest]=useState()
    
    return(
      <>
            <div className="sub-order-table">
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <div className="sub-info">
                        <p className="sub-name">{report.body?
                        JSON.stringify(report.body):''}</p>
                        <p className="sub-id">بادی مشکوک: {report.bad_body}</p>
                        </div>
                        
                        <div className="sub-info">
                        <p className="sub-name">{report.query?
                        JSON.stringify(report.query):''}</p>
                        <p className="sub-id">کوئری مشکوک: {report.bad_query}</p>
                        </div>
                    </div>
                    </div>
                    <div className="sub-num">{"Request Token: "+
                        report.requestToken}</div>
                    <div className="sub-price">{"Response Time: "+
                        report.responseTime}</div>
                    <div className="sub-num">{"Request Length: "+
                        report.requestLength}</div>
                    <div className="sub-price">{"Request Size: "+
                        report.requestSize}</div>
                </div>
                
                
            </div></>
    )
}
export default ReportQuickDetail
