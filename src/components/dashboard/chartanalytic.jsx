import React, { useEffect, useState } from "react";
import { CategoryScale, Chart, LinearScale, ArcElement } from "chart.js";
import { Chart as ChartJS, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);


const Chartanalytic = () => {

    const [linedata, setlinedata] = useState([]);

    const fetching = async()=>{
        try {
            
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/linefetch")
            const data = await resp.json();

            setlinedata(data);

        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        fetching();
    },[])

    console.log(linedata)

    const labelsdata = linedata.map((curr)=>{
         return curr.month
    })
    const displaydata = linedata.map((curr)=>{
        return curr.salesquantity
   })

   let sum = 0;
   for (let i = 0; i < displaydata.length; i++) {
    sum += displaydata[i];
    }

    console.log(sum)

   const doughnutoption = {
    cutout: 80,
    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: { display: false },
        y: { display: false },
    }

   }
   


    const doughnutdata = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
               
                data: [10, 19, 8, 5],
                backgroundColor: [
                    'red',
                    'blue',
                    'green',
                    'lightblue',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0,
            },
        ],
    };




   const data = {
    labels: labelsdata,
    datasets: [
        {
            id: 1,
            label: '',
            borderColor: '#2050ff9e',
            radius: 4,
            data: displaydata,
        },
    ],
   }
   

    const option = {
        cutout: 60,
        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            x: { display: true },
            y: { display: true },
        }

    }

    return (
        <>
            <div className="chartanalytic mt-4">
                <div className="innerchartanalytic row">
                    <div className="col-lg-8">
                        <div className="chartleft">
                            <div className="topchartleft">
                                <h4 className="m-0 fw-light">Sales Overview</h4>
                            </div>
                            <div className="middlechartleft d-flex">
                                <div className="px-4 py-2 me-2">   
                                    <h6>Total sales</h6>
                                    <h5>{sum}</h5>
                                </div>
                                
                            </div>
                            <div className="bottomchartleft">
                                <div className="innerbottomchartleft">
                                    <Line options={option} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="chartright">
                            <div className="topchartright">
                                <h4 className="fw-light">Visit Seperation</h4>
                            </div>
                            <div className="middlechartright">
                                <Doughnut options={doughnutoption} data={doughnutdata}/>
                            </div>
                            <div className="bottomchartright">
                                <div className="bottomchartrightinner">
                                    <div className="rightbottomlabels d-flex justify-content-between align-items-center">
                                        <h4 className="fs-6 fw-light m-0">Mobile</h4>
                                        <h6>40%</h6>
                                    </div>
                                    <div className="rightbottomlabels d-flex justify-content-between align-items-center">
                                        <h4 className="fs-6 fw-light m-0">Tablet</h4>
                                        <h6>40%</h6>
                                    </div>
                                    <div className="rightbottomlabels d-flex justify-content-between align-items-center">
                                        <h4 className="fs-6 fw-light m-0">Dekstop</h4>
                                        <h6>40%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chartanalytic;