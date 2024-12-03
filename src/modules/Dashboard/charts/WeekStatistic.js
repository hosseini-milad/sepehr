import { Bar } from 'react-chartjs-2';
import errortrans from '../../../translate/error';
import { useEffect, useState } from 'react';
import env from '../../../env';
function WeekStatistic(props){
    const [total, setTotal] = useState()
    const [attack,setAttack] = useState()
    const [labels,setLabels] = useState()
    useEffect(()=>{
      const postOptions={
          method:'get',
          headers: {'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'}
        }
      fetch(env.siteApi + "/report/"+props.url,postOptions, {mode:'cors'})
    .then(res => res.json())
    .then(
      (result) => {
          if(result.error){
              console.log(result.error)
          }
          else{
            setLabels(result.label)
            setAttack(result.attack)
            setTotal(result.total)
          }
          
      },
      (error) => {
          console.log(error)
      })
  },[])
    const dataRaw = attack?attack:["","","","","","",""]
    const dataTotal = total?total:["","","","","","",""]
    
    const data = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: errortrans.suspicious[props.lang] ,
            data: dataRaw,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: ["#cf4141"],
            color:['rgb(255, 255, 2555)'],
          },
          {
            label: errortrans.total[props.lang]+' (x1000)',
            data: dataTotal,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: [
              'rgba(255, 255, 255, 0.8)'
            ],
            color:['rgb(255, 255, 255)'],
          }
        ],
      };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      tooltips: {
        rtl: true 
      }
    };
    
    return(<>
        <Bar data={data} options={options}/>
        </>
    )
}
export default WeekStatistic