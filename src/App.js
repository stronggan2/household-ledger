import React, { useRef, useState } from "react";
import Content from "./Components/Content";
import List from "./Components/List";
import MoneyComeOut from "./Components/MoneyComeOut";
import Template from "./Components/Template";

const App = () => {
  const [historys, setHistorys] = useState([
    { id: 1, category: "밥🍚", content: "밥 먹기", amount: 10000 },
    { id: 2, category: "술🍻", content: "계모임", amount: 50000 },
    { id: 3, category: "운동🥊", content: "복싱 재등록", amount: 700000 },
  ]);

  const nextId = useRef(1);
  const insertHandler = (item) => {
    const history = {
      id: nextId.current,
      category: item.category,
      content: item.content,
      amount: item.amount,
    };
    setHistorys([...historys, history]);

    nextId.current += 1;
  };

  return (
    <div>
      <Template>
        <MoneyComeOut />
        <Content insertItem={insertHandler} />
        <List historys={historys} />
      </Template>
    </div>
  );
};

export default App;
