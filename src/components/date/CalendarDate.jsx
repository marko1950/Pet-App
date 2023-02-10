import { React, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarDate.css";
import calendar from "..//../assets/calendar.png";
import dog_pointing from "..//..//assets/dog_pointing.png";

const CalendarDate = (props) => {
  const [calDate, setCalDate] = useState(new Date());
  const [ToggleCalendar, setToggleCalendar] = useState(false);
  function onChange(calDate) {
    setCalDate(calDate);
    console.log(calDate);
  }

  return (
    <div className="calendar_section_wrapper">
      <div className="pm__header-content1">
        <h1 className="gradient__text1">
          Decided your service?<br></br> Pick a date
        </h1>
        <p>
          Enjoy peace of mind – the tranquility that comes with knowing that
          your loved one is being well cared for. Whether you’re going away on a
          holiday or on a business tripw, why not leave the dog sitting to us?
        </p>
        <br />
        <br />
        <span className="choices__span">Type of service:&nbsp;</span>
        <span className="choices__named">{props.serviceName}</span>
        <span className="choices__span">Date:&nbsp;</span>
        <span className="choices__named">{calDate.toLocaleDateString()}</span>
        <button className="confirm__button">Confirm</button>
      </div>
      <div className="CalendarDate__div">
        <button
          className="CalendarDate__button"
          onClick={() => setToggleCalendar(!ToggleCalendar)}
        >
          Choose a date &nbsp;
          <img
            className="CalendarDate__calendar-icon"
            src={calendar}
            alt="slika_kalendara"
          />
        </button>
        <span className="CalendarDate__span">
          {calDate.toLocaleDateString()}
        </span>
        {!ToggleCalendar && <img className="dog_pointing" src={dog_pointing} />}
        {ToggleCalendar && <Calendar onChange={onChange} value={calDate} />}
      </div>
    </div>
  );
};

export default CalendarDate;
