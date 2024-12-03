
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    registerables ,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import Cookies from 'universal-cookie';
import env from '../env';
import DashBoardDaily from '../modules/Dashboard/1DashBoardToday';
import DashboardChart from '../modules/Dashboard/2DashBoardCharts';
import DashboardProject from '../modules/Dashboard/3DashBoardProject';
import DashboardOverView from '../modules/Dashboard/4DashBoardOverview';
import { useEffect, useState } from 'react';
import errortrans from '../translate/error';
const cookies = new Cookies();

function Dashboard(props){
    const direction = props.lang?props.lang.dir:errortrans.defaultDir;
    const lang = props.lang?props.lang.lang:errortrans.defaultLang;
    const token=cookies.get(env.cookieName)
    const [totalToday,setTotalToday] = useState('')
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        ArcElement,
        Title,
        Tooltip,
        Legend,
        ...registerables
      );
      ChartJS.defaults.font.family = "Vazir";
      ChartJS.defaults.color = '#eee'
    return(
    <div class="container-fluid py-4" style={{direction:direction}}>
        <DashBoardDaily report={totalToday} direction={direction} lang={lang}/>
        <DashboardChart direction={direction} lang={lang}/>
        <div class="row mb-4">
            <DashboardProject lang={lang}/>
            <DashboardOverView />
        </div>
    </div>
    )
}
export default Dashboard