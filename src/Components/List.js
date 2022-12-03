import React from "react";
import "../Style/List.scss";
import ListItem from "./ListItem";

const List = (props) => {
  const { historys } = props;
  return (
    <div className="List">
      <div className="expenselist">
        <div className="Box">항목</div>
        <div className="Box">내역</div>
        <div className="Box">금액</div>
      </div>
      {historys.map((history) => (
        <ListItem history={history} key={history.id} />
      ))}
    </div>
  );
};

export default List;
