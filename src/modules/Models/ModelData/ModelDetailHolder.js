import { useEffect } from "react"
import { useState } from "react"
import env from "../../../env"
import Status from "../../Components/Status"
import OrderDetails from "./OrderDetails"
import OrderHistory from "./OrderHistory"
import OrderUser from "./OrderUser"
import tabletrans from "../../../translate/tables"
import errortrans from "../../../translate/error"
import OrderOptions from "./OrderOptions"
import ModelDetails from "./ModelDetails"
import ModelHistory from "./ModelHistory"
import ModelUser from "./ModelUser"
import ModelOptions from "./ModelOptions"

function ModelDetailHolder(props){
  const url = window.location.pathname.split('/')[3]
  const direction = props.lang?props.lang.dir:errortrans.defaultDir;
  const lang = props.lang?props.lang.lang:errortrans.defaultLang;

  const [content,setContent] = useState('')
  const [user,setUser] = useState('')
  const [sku,setSku] = useState('')
  const [log,setLog] = useState('')
  useEffect(() => {
    var sku=''
    var postOptions={
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({id:url})
      }
  fetch(env.siteApi + "/model/find",postOptions)
  .then(res => res.json())
  .then(
    (result) => {
      console.log(result)
        setContent(result)
        }
  ),
    (error) => {
      console.log(error);
    }
  
},[])
  
if(content)
return(
    <div class="order-detail" style={{direction:direction}}>
      <div class="od-header">
        <div class="od-header-info">
          <i class={`fa-solid fa-angle-${direction==="rtl"?"right":"left"}` }
          onClick={()=>window.location.href="/orders"}></i>
          <div class="od-header-name">
            <p>{tabletrans.order[lang]} {url}</p>
            <p>{new Date(content.date).toLocaleDateString('fa')} - 
               {new Date(content.date).toLocaleTimeString('fa')}
            </p>
          </div>
          <Status class={"od-status cmp-status"} status={content.status} 
          lang={props.lang.lang}/>
        </div>
        <div class="od-header-btn">
          <select class="status-btn" name="" id="">
            <option value="completed">completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">cancelled</option>
            <option value="refunded">Refunded</option>
          </select>
          <div class="print-btn">
            <i class="fa-solid fa-print"></i>
            <p>{tabletrans.print[lang]}</p>
          </div>
          <div class="edit-btn">
            <i class="fa-solid fa-pen"></i>
            <p>{tabletrans.edit[lang]}</p>
          </div>
        </div>
      </div>
      <div class="od-wrapper">
        <div class="od-col-1">
          <ModelDetails data={sku} content={content} lang={lang}/>
          <ModelHistory log={log} lang={lang}/>
        </div>
        <div class="od-col-2">
          <ModelUser user={user} lang={lang} direction={direction} orderNo={content.rxOrderNo}/>
          <ModelOptions data={sku} content={content} lang={lang} direction={direction} />
        </div>
      </div>
    </div>
    )
  else  return(env.loader
  )
}
export default ModelDetailHolder