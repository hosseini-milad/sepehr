import errortrans from "../../translate/error"
import WeekStatistic from "./charts/WeekStatistic"

function DashboardChart(props){
    return(
        <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-info shadow-info border-radius-lg py-3 pe-1">
                <div class="chart">
                  <WeekStatistic url={"webService-list"} lang={props.lang} 
                    direction={props.direction}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">{errortrans.webserverStatistics[props.lang]}</h6>
              <p class="text-sm "> </p>
              <hr class="dark horizontal"/>
              <div class="d-flex flexJustify">
                <i class="fas fa-history"></i> 
                <p class="mb-0 text-sm">30 {errortrans.minAgo[props.lang]} </p>
                <button className="btn bg-gradient-info w-50 mb-0 stat-btn" type="button" 
                  data-target="infoToast"
                  onClick={()=>window.location.href="/report/service"}>{errortrans.details[props.lang]}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2  ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <div class="chart">
                <WeekStatistic url={"osService-list"} lang={props.lang}
                  direction={props.direction}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 "> {errortrans.osStatistics[props.lang]}</h6>
              <p class="text-sm "> <span class="font-weight-bolder"> </span>   </p>
              <hr class="dark horizontal"/>
              <div class="d-flex flexJustify">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm"> 4 {errortrans.minAgo[props.lang]} </p>
                <button className="btn bg-gradient-info w-50 mb-0 stat-btn" type="button" 
                  data-target="infoToast"
                  onClick={()=>window.location.href="/report/systems"}>{errortrans.details[props.lang]}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 mb-3">
          <div class="card z-index-2 ">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                <div class="chart">
                <WeekStatistic url={"devService-list"} lang={props.lang}/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="mb-0 ">{errortrans.devicesStatistics[props.lang]}</h6>
              <p class="text-sm "> </p>
              <hr class="dark horizontal"/>
              <div class="d-flex flexJustify">
                <i class="fas fa-history"></i>
                <p class="mb-0 text-sm"> 15 {errortrans.minAgo[props.lang]} </p>
                <button className="btn bg-gradient-info w-50 mb-0 stat-btn" type="button" 
                  data-target="infoToast"
                  onClick={()=>window.location.href="/report/devices"}>{errortrans.details[props.lang]}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DashboardChart