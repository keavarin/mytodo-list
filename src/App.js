import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Card from "./Card";

function App() {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("list");
    if (savedList) {
      return JSON.parse(savedList);
    } else {
      return [
        { id: 1, task: "test", status: "Todo" },
        { id: 2, task: "test", status: "Done" },
        { id: 3, task: "test", status: "Todo" },
      ];
    }
  });

  const [editList, setEditList] = useState([]);
  console.log("Edit", editList);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleDone = (id) =>
    setList(
      list.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "Todo" ? "Done" : "Todo" }
          : item
      )
    );

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleEditClick = (id) => {
    // console.log("id", id);
    const editTask = list.filter((i) => i.id === id);
    // console.log("edit", editTask);
    setEditList(editTask[0]);
  };
  const handleEditChange = (e) => {
    e.preventDefault();
    //console.log("edit", editList);
    const newList = { ...editList, task: e.target.value };

    //console.log("new", newList);
    setEditList(newList);
    console.log("editList", editList);
  };

  const updateTodo = (id, updatedTodo) => {
    const updateTask = list.map((i) => (i.id === id ? updatedTodo : i));
    setList(updateTask);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    updateTodo(editList.id, editList);
  };

  return (
    <div className="App">
      <Header setList={setList} list={list} />
      <div className="card-area">
        <Card
          name="Todo"
          List={list.filter((item) => item.status === "Todo")}
          setList={setList}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleEditClick={handleEditClick}
          editList={editList}
          handleEditChange={handleEditChange}
          handleEditFormSubmit={handleEditFormSubmit}
        />

        <Card
          name="Done"
          List={list.filter((item) => item.status === "Done")}
          setList={setList}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleEditClick={handleEditClick}
          editList={editList}
          handleEditChange={handleEditChange}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      </div>
    </div>
  );
}

export default App;
