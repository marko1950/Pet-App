import React, { useState } from "react";
import data from "./data";
import "./service.css";

const Service = ({ getServiceName }) => {
  const [services] = useState(data);
  const [activeService, setactiveService] = useState(services[0]);

  const renderedServices = services.map((service, index) => {
    const active = index === services.indexOf(activeService) ? "border" : "";
    const onServiceClick = (index) => {
      setactiveService(services[index - 1]);
    };

    return (
      <div
        key={service.id}
        onClick={() =>
          onServiceClick(service.id) || getServiceName(service.title)
        }
        className={`services__wrapper ${active}`}
      >
        <img src={service.image} />
        <h2>{service.title}</h2>
      </div>
    );
  });

  return (
    <div>
      <h1 className="services__heading">Pet Owner Services</h1>
      <div className="services__div">{renderedServices}</div>
      <div className="services__quote">
        <img src={activeService.image} />
        {activeService.quote}
      </div>
    </div>
  );
};

export default Service;
