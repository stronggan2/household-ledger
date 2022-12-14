import React, { useState } from "react";
import "../Style/Content.scss";

const Content = (props) => {
  const { insertItem } = props;

  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const clickHandler = () => {
    insertItem(content, amount, category);
    setContent("");
    setAmount("");
    setCategory("");
  };

  return (
    <div>
      <div className="Contents">
        <div className="inputarea">
          ν­λͺ©
          <br />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="Category-select"
          >
            <option value="">πΈνμ₯μΈ μ΄μ πΈ</option>
            <option value={"λ°₯π"}> λ°₯π</option>
            <option value={"μ π»"}> μ π»</option>
            <option value={"μ¬νβ"}> μ¬νβ</option>
            <option value={"μ΄λπ₯"}> μ΄λπ₯</option>
            <option value={"κ²½μ‘°μ¬π΅"}> κ²½μ‘°μ¬π΅</option>
            <option value={"κΈ°νπ³"}> κΈ°νπ³</option>
          </select>
        </div>
        <div className="inputarea">
          λ΄μ­
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
          κΈμ‘
          <br />
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button onClick={clickHandler}>μΆκ°</button>
      </div>
    </div>
  );
};

export default Content;
