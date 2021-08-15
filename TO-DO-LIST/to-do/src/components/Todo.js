import React from "react";

const Todo = (props) => {
  return (
    <div>
      <li className="todo stack-small">
        <div className="c-cb">
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <button
          type="doneTask"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Done
        </button>
      </li>
    </div>
  );
};

export default Todo;
