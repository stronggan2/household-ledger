import React, { useState } from "react";
import "../Style/Content.scss";

const Content = (props) => {
  const { insertItem } = props;

  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <div className="Contents">
        <div className="inputarea">
          항목
          <br />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="inputarea">
          금액
          <br />
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          onClick={insertItem({
            category: category,
            content: content,
            amount: amount,
          })}
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default Content;
