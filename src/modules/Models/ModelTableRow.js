import React ,{ useState } from "react"
import Status from "../Components/Status"
import  env, { normalPriceCount, rxFindCount } from "../../env"
import ModelQuickDetail from "./ModelComponent/ModelQuickDetail"

function ModelTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const model=props.model
  console.log(model)
  if(!model)
    return(<div>{env.loader}</div>)
  else return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion":"accordion"}>
            <td className="checkBoxStyle">
              <input type="checkbox" name="" id="" checked={checkState}
              onChange={(e)=>setCheckState(checkState?false:true)}/></td>
            <td>
                <div className="order-id">
                  <p onClick={()=> window.location.href=
                    "/models/detail/"+model._id}>
                    {model.name}</p>
                </div>
            </td>
            <td>
              <div className="cu-avatar">
                  <img src="/img/avatar/avatar_1.jpg" alt="avatar"/>
                  <div className="cu-name">
                    <p className="name">{model.userInfo[0].username}</p>
                    <p className="email">{model.userInfo[0].phone}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="or-date">
                  <p className="date">{new Date(model.date)
                  .toLocaleDateString(props.lang==="persian"?'fa':'en')}</p>
                  <p className="time">{new Date(model.date)
                  .toLocaleTimeString(props.lang==="persian"?'fa':'en')}</p>
                </div>
              </td>
              <td>
                <div className="order-num">
                  <p>{model.dataRecord}</p>
                </div>
              </td>
              <td>
                <div className="order-price">
                  <p>{model.headers}</p>
                </div>
              </td>
              <td>
                <Status status={model.status} class={"order-status"} 
                  lang={props.lang}/>
              </td>
            <td>
              <div className="more-btn">
              <i className={`tableIcon fas ${activeAcc?"fa-chevron-up":"fa-chevron-down"}`} 
                onClick={()=>props.showDetail(activeAcc?"-1":props.index)} ></i>
                <i className="tableIcon fas fa-edit" onClick={()=>
                  window.location.href="/models/detail/"+model._id}></i>
                <i className="tableIcon fas fa-ellipsis-v" 
                  onClick={()=>setOpenOption(openOption?0:1)}></i>
              </div>
              {openOption?<div className="sub-more-menu">
                <div className="sub-option sub-delete">
                <i className="tableIcon fas fa-remove" style={{color: "#ff0000"}}></i>
                  <p>Delete</p>
                </div>
                <div className="sub-option sub-edit">
                  <i className="tableIcon fas fa-edit"></i>
                  <p>Edit</p>
                </div>
              </div>:<></>}
            </td>
          </tr>
          {activeAcc?<tr className="sub-order">
        <td colSpan="9"><ModelQuickDetail order={model}/></td></tr>
          :<React.Fragment></React.Fragment>}
          </React.Fragment>
    )
}
export default ModelTableRow