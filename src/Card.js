import React, { useState } from "react";
function Card(props) {
  const [isEdit, setIsEdit] = useState(false);

  //console.log(props.editList.task);

  return (
    <div className="card">
      <h3 className="title">{props.name}</h3>
      {props.List.map((i) => (
        <>
          <h4 key={i.id}>
            {i.id}:{i.task}
            {i.status === "Todo" ? (
              <input type="checkbox" onClick={() => props.handleDone(i.id)} />
            ) : null}
            <button onClick={() => props.handleDelete(i.id)}>Delete</button>
            <button
              onClick={() => {
                props.handleEditClick(i.id);
                setIsEdit(true);
              }}
            >
              Edit
            </button>
            {isEdit && (
              <>
                <input
                  type="text"
                  name="editTodo"
                  placeholder="Edit"
                  value={props.editList.task}
                  onChange={props.handleEditChange}
                />

                <button
                  onClick={(e) => {
                    props.handleEditFormSubmit(e);
                    setIsEdit(false);
                  }}
                >
                  update
                </button>
                <button
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  cancel
                </button>
              </>
            )}
          </h4>
        </>
      ))}
    </div>
  );
}

export default Card;
