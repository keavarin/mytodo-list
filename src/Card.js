import React, { useState } from "react";
function Card(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="card">
      <h3 className="title">{props.name}</h3>
      {isShow && (
        <>
          {props.List.map((i) => (
            <>
              <h4 key={i.id}>
                {i.id}:{i.task}
              </h4>
              {i.status === "Todo" ? (
                <input type="checkbox" onClick={() => props.handleDone(i.id)} />
              ) : null}
              <button onClick={() => props.handleDelete(i.id)}>Delete</button>
              <button
                onClick={() => {
                  props.handleEditClick(i.id);
                  setIsEdit(true);
                  setIsShow(false);
                }}
              >
                Edit
              </button>
            </>
          ))}
        </>
      )}

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
              setIsShow(true);
            }}
          >
            update
          </button>
          <button
            onClick={() => {
              setIsEdit(false);
              setIsShow(true);
            }}
          >
            cancel
          </button>
        </>
      )}
    </div>
  );
}

export default Card;
