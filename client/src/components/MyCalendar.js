import React, { Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as actions from "../actions";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const URL = 'ws://localhost:3030';
const minTime = new Date();
minTime.setHours(7,0,0);
const maxTime = new Date();
maxTime.setHours(21,0,0);

moment.locale('cz');

const localizer = momentLocalizer(moment);

  const messages = {
    allDay: 'Celý den',
    previous: '<',
    next: '>',
    today: 'Dnes',
    month: 'Měsíc',
    week: 'Týden',
    day: 'Den',
    agenda: 'Agenda',
    date: 'Datum',
    time: 'Čas',
    event: 'Událost',
    work_week: 'Týden',
    showMore: total => `+ Zobrazit další (${total})`
  };

class MyCalendar extends Component{
  ws = new WebSocket(URL);
  componentDidMount() {
    this.props.getEvents();
    this.ws.onmessage = evt => {
      if(evt.data === "newEvent"){
        this.props.getEvents();
      }

  }     
  this.ws.onclose = () => {
      this.setState({
        ws: new WebSocket(URL),
      })
  }
}
  state = {
    popUp: true, 
    show: false,
    slot: {}
    };
  handleReserve = () => {
    this.setState({show: false, book: true});
    var startDate = moment(this.state.slot.start);
    var endDate = moment(this.state.slot.end);
    var newEvent = {
      allDay: false,
      end: endDate,
      start: startDate,
      title: this.props.auth.userName,
      id: this.props.auth.id,
      userName: this.props.userName
    };
    this.props.handleEvent(newEvent);
    this.ws.send("newEvent");
  };
  handleClose = () => {
    this.setState({show: false});
    this.setState({book: false});
  };
  handleShow = () => this.setState({show: true});
  onSlotChange = (slotInfo) => {
      
    if(this.props.auth.userName === undefined){
      if(this.state.popUp){
        this.setState({ popUp: false });
        window.alert("Pro zabookování termínu je potřebné se přihlásit");
      }
      return ;
      }
    this.handleShow();
    this.setState({slot: slotInfo});
  }

    onEventClick = (event) => {
      console.log(event) //Shows the event details provided while booking
    }

    render (){
      return (

          <div style={{ height: "800px"}}>
            <div>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Rezervace</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ak si prajete rezervovat dany termin, kliknite na tlacitko rezervovat</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Zavrit
                  </Button>
                  <Button variant="primary" onClick={this.handleReserve}>
                    Rezervovat
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <Calendar
              localizer={localizer}
              events={this.props.events.map(oldEvent => ({
                title: oldEvent.title,
                end: new Date(oldEvent.end),
                start: new Date(oldEvent.start),
                allDay: oldEvent.allDay
              }))}
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
              messages={messages}
            />
          </div>
    );
  }
} 

function mapStateToProps({ events, auth }) {
  return { 
    events,
    auth
   };
}

export default connect(mapStateToProps, actions)(MyCalendar);