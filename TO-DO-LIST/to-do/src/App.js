import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: taskList.length + 1, name: name };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks.map((task) => (
    <Todo id={task.id} name={task.name} key={task.id} deleteTask={deleteTask} />
  ));

  const tasksNoun = taskList.length !== 1 ? "notes" : "note";
  const headingText = `I have currently ${taskList.length} ${tasksNoun}`;

  return (
    <div className="todoapp stack-large">
      <header className="App-header">
        <h1>Notes to myself</h1>
        <h2 id="list-heading">{headingText}</h2>
      </header>

      <Form addTask={addTask} />

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
