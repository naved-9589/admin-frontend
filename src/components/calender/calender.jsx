import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";



moment.locale("en-GB");
const localizer = momentLocalizer(moment);




const Calender = () => {

    const [eventsData, setEventsData] = useState();

        

    const fetchevents = async()=>{
      try {
      
        const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/fetchcalender")
         const data = await resp.json();
         setEventsData(data);
      } catch (error) {
        console.log(error);
      }
    }


    useEffect(()=>{
          fetchevents();
    },[])

    const addcalenderevent = async(start, end, title)=>{
          try {
            
            const resp = await fetch("https://admin-dashboard-iiwz.onrender.com/adcalenderevent", {
              method: "POST",
              headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({start, end, title})
            })
            

          } catch (error) {
            console.log(error);
          }
    }



  console.log(eventsData);

    const handleSelect = ({ start, end }) => {
        console.log(start);
        console.log(end);
        const title = window.prompt("Event name");
        if (title)
          setEventsData([
            ...eventsData,
            {
              start,
              end,
              title
            }
          ]);
          addcalenderevent(start, end, title);
      };




  return (
    <div className="calender">
        <div className="innercalender p-4">
            <Calendar
            views={["day", "agenda", "work_week", "month"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event) => alert(event.title)}
            onSelectSlot={handleSelect}
            />
        </div>
    </div>

)
}

export default Calender
