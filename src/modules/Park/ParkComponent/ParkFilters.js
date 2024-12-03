import StyleInput from "../../../components/Button/Input"
import StyleSelect from "../../../components/Button/AutoComplete"
import StyleDatePicker from "../../../components/Button/DatePicker"
import tabletrans from "../../../translate/tables"
import { useState } from "react"
import ChartPark from "./Chart"

function ParkFilters(props){
  const [showS,setS] = useState()
  const showStat=(e)=>{
    setS(e)
  }
    return(
        <div className="user-filter">
          <StyleSelect title={"گروه"} class="filterComponent" direction={props.lang.dir}
            options={props.groupList||[]} label="title"
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              group:e?e.group:''
            }))}/>
          <div className="serach-input">
            <StyleSelect title={"زیرگروه"} class="filterComponent" direction={props.lang.dir}
            options={props.subGroupList||[]} label="title"
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              subgroup:e?e.subgroup:''
            }))}/>
          <div className="serach-input">
            <StyleSelect title={"نام پارک"} direction={props.lang.dir} 
            options={props.parkList||[]}
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              center:e
            }))}/>
            <button className="edit-btn" onClick={()=>showStat(1)}>
               نمودار میله ای</button>
            <button className="edit-btn" onClick={()=>showStat(2)}>
               نمودار دایره ای</button>
            <button className="edit-btn" onClick={()=>showStat(3)}>
               نمودار زیرگروه</button>
          </div>
            <i className="tableIcon fas fa-ellipsis-v"></i>
          </div>
          <div className="option-sub">
            <div className="option">
              <i className="fa-solid fa-print fa-sm"></i>
              <p>Print</p>
            </div>
            <div className="option">
              <i className="fa-solid fa-file-import fa-sm"></i>
              <p>Import</p>
            </div>
            <div className="option">
              <i className="fa-solid fa-file-export fa-sm"></i>
              <p>Export</p>
            </div>
          </div>
          {showS?showS!==3?<ChartPark close={setS} title={props.chartTitle}
          labels={props.chartLabel} showS={showS}
          data={props.chartData}/>:
          <ChartPark close={setS} title={"نمودار زیرگروه ها"}
          labels={props.subChart.subChartLabel} showS={showS}
          data={props.subChart.subChartData}/>
          :<></>}
        </div>
    )
}
export default ParkFilters