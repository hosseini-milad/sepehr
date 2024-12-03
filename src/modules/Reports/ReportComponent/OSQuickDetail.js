import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function OSQuickDetail(props){
    const report = props.report
    const [request,setRequest]=useState()
    
    return(
      <>
            <div className="sub-order-table">
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <div className="sub-info">
                        <p className="sub-id">منابع سیستم 
                        <table className="resourceTable">
                            <thead><th></th>
                                {report.eventResource&&report.eventResource.Cpu.map((res,i)=>(
                                    <th key={i}>{"t"+ (i+1)}</th>))}
                            </thead>
                            <tbody>
                                <tr><td>Cpu</td>
                                {report.eventResource&&report.eventResource.Cpu.map((res,i)=>(
                                <td key={i} className={res>50?"alertCell":""}>
                                    {res}</td>))}</tr>
                                <tr><td>Ram</td>
                                {report.eventResource&&report.eventResource.Ram.map((res,i)=>(
                                <td key={i} className={res>90?"alertCell":""}>
                                    {res}</td>))}</tr>
                            </tbody>
                        </table>
                        </p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                
                
            </div></>
    )
}
export default OSQuickDetail
