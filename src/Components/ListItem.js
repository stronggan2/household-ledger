import React from "react";
import "../Style/ListItem.scss";

const ListItem = (props) => {
  const { history } = props;

  return (
    <div className="ListItem">
      <div>{history.category}</div>
      <div>{history.content}</div>
      <div>{history.amount}</div>
    </div>
  );
};

export default ListItem;
