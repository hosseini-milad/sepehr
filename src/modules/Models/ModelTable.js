import { useState } from "react"
import tabletrans from "../../translate/tables"
import ModelTableRow from "./ModelTableRow";

function ModelTable(props){
  const models = props.models
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
    return(
        <table>
        <thead>
        <tr>
          <th className="checkBoxStyle">
              <input type="checkbox" name="" id=""/></th>
            <th>
              <p>{tabletrans.name[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.Customer[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.date[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.count[lang]}</p>
              <i></i>
            </th>
            <th>
            <p>{tabletrans.request[lang]}</p>
              <i></i>
            </th>
            <th>
            <p>{tabletrans.status[lang]}</p>
              <i></i>
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {models&&models.filter?models.filter.map((model,i)=>(
            <ModelTableRow detail={detail} showDetail={showDetail} 
              model={model} index={i} key={i} lang={lang}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default ModelTable