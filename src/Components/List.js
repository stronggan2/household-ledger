import React from "react";
import "../Style/List.scss";
import ListItem from "./ListItem";

const List = (props) => {
  const { historys } = props;
  console.log(historys);
  return (
    <table className="List" border={1}>
      <thead className="expenselist">
        <tr>
          <td className="Box">항목</td>
          <td className="Box">내역</td>
          <td className="Box">금액</td>
        </tr>
      </thead>
      <tbody>
        {historys.map((history) => (
          <ListItem history={history} key={history.id} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
