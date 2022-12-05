import React, { useState } from "react";
import "../Style/Content.scss";
import Button from "@mui/material/Button";

const Content = () => {
  const [state, setState] = useState({
    content: "",
    amount: "",
    category: "",
  });

  const handlerChangeState = (e) => {
    setState({
      ...state,
      [e.target.content]: e.target.amount,
    });
  };

  return (
    <div>
      <div className="Contents">
        <div className="inputarea">
          항목
          <br />
          <select
            name="category"
            // value={state.category}
            onChange={handlerChangeState}
            id="Category-select"
          >
            <option value="">💸텅장인 이유💸</option>
            <option value={1}> 밥🍚</option>
            <option value={2}> 술🍻</option>
            <option value={3}> 여행✈</option>
            <option value={4}> 운동🥊</option>
            <option value={5}> 경조사💵</option>
            <option value={6}> 기타💳</option>
          </select>
        </div>
        <div className="inputarea">
          내역
          <br />
          <input
            type="text"
            name="content"
            // value={state.content}
            onChange={handlerChangeState}
          />
        </div>
        <div className="inputarea">
          금액
          <br />
          <input
            type="text"
            name="amount"
            // value={state.amount}
            onChange={handlerChangeState}
          />
        </div>
        <Button variant="contained" color="success">
          추가
        </Button>
      </div>
    </div>
  );
};

export default Content;
