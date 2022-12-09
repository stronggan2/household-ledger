import React from "react";
import "../Style/ListItem.scss";
import { TfiTrash } from "react-icons/tfi";

const ListItem = (props) => {
  const { history, removeItem } = props;

  return (
    <tr className="ListItem">
      <td>{history.category}</td>
      <td>{history.content}</td>
      <td>{history.amount}</td>
      <td>
        <button type="submit" onClick={() => removeItem(history.id)}>
          <TfiTrash />
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
