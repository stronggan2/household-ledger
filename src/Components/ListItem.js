import React from "react";
import "../Style/ListItem.scss";

const ListItem = (props) => {
  const { history } = props;

  return (
    <tr className="ListItem">
      <td>{history.category}</td>
      <td>{history.content}</td>
      <td>{history.amount}</td>
    </tr>
  );
};

export default ListItem;
