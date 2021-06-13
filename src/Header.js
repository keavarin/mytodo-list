import React, { useState } from "react";

function Header(props) {
  const [text, setText] = useState("");
  console.log(text);

  const handleAdd = () => {
    props.setList([
      ...props.list,
      {
        id:
          props.list.length !== 0
            ? props.list[props.list.length - 1].id + 1
            : 1,
        task: text,
        status: "Todo",
      },
    ]);
  };

  return (
    <div className="header">
      <p>Todo List</p>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
export default Header;
