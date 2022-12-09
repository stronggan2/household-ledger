import React from "react";
import "../Style/Template.scss";

const Template = ({ children }) => {
  return (
    <div className="Template">
      <div>
        <div className="MoneyComeOut">
          <div>가계부</div>
        </div>
        <button className="button">수입</button>
        <button className="button">지출</button>
        <div className="Content">{children}</div>
      </div>
    </div>
  );
};

export default Template;
