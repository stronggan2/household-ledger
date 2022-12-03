import React from "react";
import "../Style/ListItem.scss";

const ListItem = (props) => {
  const { history } = props;

  return (
    <div className="ListItem">
      <div>{history.text}</div>
    </div>
  );
};

export default ListItem;
