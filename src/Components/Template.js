import React from "react";
import "../Style/Template.scss";

const Template = ({ children }) => {
  return (
    <div className="Template">
      <div>
        <div className="MoneyComeOut">
          {/* /버튼에 온클릭 걸어주기/ */}
          <button>입금</button>
          <button>출금</button>
        </div>
        <div>가계부</div>
        <div className="Content">{children}</div>
      </div>
    </div>
  );
};

export default Template;
