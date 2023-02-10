import React, { useState } from "react";
import "./question.css";

const Question = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(items);

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    const onTitleClick = (index) => {
      setActiveIndex(index);
    };

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <div className="iconn">
            <i className="dropdown icon"></i>
          </div>
          <p>{item.title}</p>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Question;
