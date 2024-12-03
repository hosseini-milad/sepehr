import { useEffect, useState } from "react"
import env from "../env"
import Cookies from 'universal-cookie';
import errortrans from "../translate/error";
import StatusBar from "../modules/Components/StatusBar";
import Paging from "../modules/Components/Paging";
import ParkTable from "../modules/Park/ParkTable";
import ParkFilters from "../modules/Park/ParkComponent/ParkFilters";
const cookies = new Cookies();

function Park(props){
    const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const token=cookies.get(env.cookieName)

    const [update,setUpdate] = useState(0)
    const [content,setContent] = useState('')
    const [parkList,setParkList] = useState('')
    const [groupList,setGroupList] = useState('')
    const [chartData,setChartData] = useState('')
    const [chartTitle,setChartTitle] = useState('')
    const [subChart,setSubChart] = useState('')
    const [chartLabel,setChartLabel] = useState('')
    const [subGroupList,setSubGroupList] = useState('')
    const [filters,setFilters] = useState({})
    
    useEffect(() => {
        const body={
            offset:filters.offset?filters.offset:"0",
            pageSize:filters.pageSize?filters.pageSize:"10",
            customer:filters.customer,
            center:filters.center,
            group:filters.group,
            subgroup:filters.subgroup,
            brand:filters.brand,
            access:"manager"
        }
        const postOptions={
            method:'post',
            headers: {'Content-Type': 'application/json',
            "x-access-token":token&&token.token,"userId":token&&token.userId},
            body:JSON.stringify(body)
          }
          console.log(postOptions)
      fetch(env.siteApi + "/panel/user/list-park",postOptions)
      .then(res => res.json())
      .then(
        (result) => {
            setContent('')
            setParkList(result.parkList)
            setGroupList(result.groupList)
            setSubGroupList(result.subGroupList)
            setChartLabel(result.chartLabel)
            setChartData(result.chartData)
            setChartTitle(result.title)
            setSubChart(result.subChart)
            setTimeout(()=> setContent(result),200)
        },
        (error) => {
          console.log(error);
        }
        
    )},[filters])
    const resizeFile = (file) =>
    new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    const updateCustomers=async(event)=>{
      const uploadFile = event.target.files[0]
      const tempfile = await resizeFile(uploadFile);
        const token=props.token
        const postOptions={
            method:'post',
            headers: { 'Content-Type': 'application/json',
            "x-access-token": token&&token.token,
            "userId":token&&token.userId
        },
            body:JSON.stringify({base64image:tempfile,folderName:"excel",
                imgName:uploadFile.name.split('.')[0]})
          }
        fetch(env.siteApi + "/panel/user/upload",postOptions)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                if(result.error){

                }
                else{
                    setUpdate(result.url)
                }
            },
            (error) => {
                console.log(error)
            })
  }
    return(
    <div className="user" style={{direction:direction}}>
      <h4>Park List</h4>
      <div className="od-header-btn">
          <label htmlFor="upFiles" className="edit-btn">
            <i className="fa-solid fa-refresh"></i>
            Upload
          </label>
          <input id="upFiles" type="file" accept=".*" style={{visibility:"hidden" }}
                onChange={updateCustomers}/>
          
        </div>
      <div className="list-container">
        <StatusBar />
        <ParkFilters lang={props.lang} setFilters={setFilters} 
          options={content.access} parkList={parkList}
          groupList={groupList} subGroupList={subGroupList}
          chartLabel={chartLabel} chartData={chartData}
          chartTitle={chartTitle} subChart={subChart}/>
        <div className="user-list">
          <ParkTable reportList={content} lang={props.lang} />
        </div>
        <Paging content={content} setFilters={setFilters} filters={filters}
          lang={props.lang}/>
      </div>
    </div>
    )
}
export default Park