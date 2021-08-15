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

/* 
  const addLikes = () => {
    console.log("wow");
  };
  handleChange(e){
    this.setState({ value: e.target.value });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes to myself</h1>
        <p>I have currently</p>
      </header>
      <div className="tasks">
        <input type="text" name="task" onChange={this.handleChange} />
        <input type="submit" value="Add task" />
        <button onClick={addLikes}> Like </button>
      </div>
    </div>
  );
   */
