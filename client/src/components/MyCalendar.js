import React, { Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

const minTime = new Date();
minTime.setHours(7,0,0);
const maxTime = new Date();
maxTime.setHours(21,0,0);

moment.locale('en');

const localizer = momentLocalizer(moment);

const dummyEvents = [
  {
    allDay: false,
    end: new Date('September 10, 2019 11:13:00'),
    start: new Date('September 09, 2019 11:13:00'),
    title: 'hi',
  },
  {
    allDay: true,
    end: new Date('September 09, 2019 11:13:00'),
    start: new Date('September 09, 2019 11:13:00'),
    title: 'All Day Event',
  },
  ];

class MyCalendar extends Component{

    onSlotChange = (slotInfo) => {
      var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
      var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
      console.log('startTime', startDate); //shows the start time chosen
      console.log('endTime', endDate); //shows the end time chosen

    }

    onEventClick = (event) => {
      console.log(event) //Shows the event details provided while booking
    }

    render (){
      return (

          <div style={{ height: "500px"}}>
            <Calendar
              localizer={localizer}
              events={dummyEvents}
              startAccessor="start"
              endAccessor="end"
              defaultView="work_week"
              views={['work_week', "day", "month", "agenda"]}
              onSelectEvent={event => this.onEventClick(event)}
              onSelectSlot={(slotInfo) => this.onSlotChange(slotInfo) }
              min = {minTime}
              max = {maxTime}
              step={60}
              timeslots={1}
              selectable={"ignoreEvents"}
            />
          </div>
    );
  }
} 
export default MyCalendar;