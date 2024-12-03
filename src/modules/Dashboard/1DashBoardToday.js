import { useEffect, useState } from "react"
import env, { normalPriceCount } from "../../env"
import errortrans from "../../translate/error"

function DashBoardDaily(props){
  const [report,setReport] = useState('')
  useEffect(()=>{
    const postOptions={
        method:'get',
        headers: {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'}
      }
    fetch(env.siteApi + "/report/today-list",postOptions, {mode:'cors'})
  .then(res => res.json())
  .then(
    (result) => {
        if(result.error){
            console.log(result.error)
        }
        else{
          setReport(result.todayData)
        }
        
    },
    (error) => {
        console.log(error)
    })
  },[])
  
    return(
        <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                    <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                        <i className="fas fa-bullhorn"></i>
                    </div>
                    <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                        <p className="text-sm mb-0 text-capitalize">{errortrans.todayRequest[props.lang]}</p>
                        <h4 className="mb-0">{report?normalPriceCount(report.todayRequest):''}</h4>
                    </div>
                    </div>
                    <hr className="dark horizontal my-0"/>
                    <div className="card-footer p-3">
                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>
                    {errortrans.thanyesterday[props.lang]}</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user"></i>
              </div>
              <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                <p className="text-sm mb-0 text-capitalize">{errortrans.todayClient[props.lang]}</p>
                <h4 className="mb-0">{report?normalPriceCount(report.todayUser):''}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>
              {errortrans.thanyesterday[props.lang]}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <i className="fas fa-user-plus"></i>
              </div>
              <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                <p className="text-sm mb-0 text-capitalize">{errortrans.newClient[props.lang]}</p>
                <h4 className="mb-0">{report?normalPriceCount(report.todayNew):''}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2% </span>
              {errortrans.thanyesterday[props.lang]}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 position-absolute">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className={`${props.direction==="ltr"?"text-end":"text-start"} pt-1`}>
                <p className="text-sm mb-0 text-capitalize">{errortrans.todayAttack[props.lang]}</p>
                <h4 className="mb-0">{report?normalPriceCount(report.todayAttack):''}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0"/>
            <div className="card-footer p-3">
              <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>
                {errortrans.thanyesterday[props.lang]}</p>
            </div>
          </div>
        </div>
        </div>
    )
}
export default DashBoardDaily