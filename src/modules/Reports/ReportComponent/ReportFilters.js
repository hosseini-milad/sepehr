import StyleInput from "../../../components/Button/Input"
import StyleSelect from "../../../components/Button/AutoComplete"
import StyleDatePicker from "../../../components/Button/DatePicker"
import tabletrans from "../../../translate/tables"

function ReportFilters(props){
    return(
        <div className="user-filter">
          <StyleSelect title={"Status"} class="filterComponent" direction={props.lang.dir}
            options={["attack","benign"]} 
            action={(e)=>props.setFilters(prevState => ({
              ...prevState,
              predict:e
            }))}/>
          <div className="serach-input">
            <StyleInput title={"Remote Ip"} direction={props.lang.dir} 
            action={(e)=>(e.length>3||e.length===0)&&props.setFilters(prevState => ({
              ...prevState,
              remoteIp:e
            }))}/>
            <StyleDatePicker title={tabletrans.selectDate[props.lang.lang]} class="filterComponent" 
              direction={props.lang.dir} local={props.lang.dir==="ltr"?"en":"fa"}
              action={(e)=>props.setFilters(prevState => ({
                ...prevState,
                date:e
              }))}/>
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
        </div>
    )
}
export default ReportFilters