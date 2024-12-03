import { useEffect, useState } from "react"
import env, { normalPriceCount, rxFindCount } from "../../../env"

function ModelQuickDetail(props){
    const order = props.order
    const [request,setRequest]=useState()
    
    return(
      <>
            {request?<div className="sub-order-table">
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <img src="/img/lenz01.jpg"
                        alt={request.sku}/>
                        <div className="sub-info">
                        <p className="sub-name">{order.title}</p>
                        <p className="sub-id">کد محصول: {order.rxLenz.split(',')[2]}</p>
                        </div>
                    </div>
                    </div>
                    <div className="sub-num">{rxFindCount(order)}</div>
                    <div className="sub-price">{normalPriceCount(order.rxLenz.split(',')[0])}</div>
                </div>
                <div className="sub-row">
                    <div className="sub-avatar">
                    <div className="sub-avatar-container">
                        <img src="/img/lenz02.jpg"
                        alt={order.coverCode}/>
                        <div className="sub-info">
                        <p className="sub-name">{order.coverCode}</p>
                        <p className="sub-id">{order.coverDesc}</p>
                        </div>
                    </div>
                    </div>
                    <div className="sub-num">3</div>
                    <div className="sub-price">2</div>
                </div>
                
            </div>:env.loader}</>
    )
}
export default ModelQuickDetail