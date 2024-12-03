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
import { Bar, Pie ,} from 'react-chartjs-2';
import errortrans from '../../../translate/error';
function ChartPark(props){
    const labels = props.labels
    const dataRaw = props.data
    
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
    ChartJS.defaults.color = '#111'

    const data = {
        labels,
        color:'rgb(255, 255, 255)',
        datasets: [
          {
            label: props.title ,
            data: dataRaw,
            barPercentage: 1,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 1
          }
        ],
      };
    const options = {
      scaleShowValues: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }]
      },
      plugins: {
        legend: {
          position: 'top',
        },
      },
      tooltips: {
        rtl: true 
      }
    };
    
    return(<div className='popNow'>
        <i className='fa fa-close' onClick={()=>props.close(0)}></i>
        {props.showS===1?
        <Bar data={data} options={options}/>:
        props.showS===2?
        <Pie data={data} options={options}/>:
        <Bar data={data} options={options}/>}
        </div>
    )
}
export default ChartPark