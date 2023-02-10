import { React, useState } from "react";
import Service from "../../components/servicees/Service";
import CalendarDate from "../../components/date/CalendarDate.jsx";

const Services = () => {
  const [serviceName, setServiceName] = useState("House Sitting");
  const getServiceName = (name) => {
    setServiceName(name);
  };
  return (
    <div id="POS">
      <Service getServiceName={getServiceName} />
      <CalendarDate serviceName={serviceName} />
    </div>
  );
};

export default Services;
