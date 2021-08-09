import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes to myself</h1>
        <p>I have currently</p>
      </header>
      <div className="tasks">
        <input type="text" id="task" /* onChange={props.change} */ />
        <input type="submit" value="Add task" />
      </div>
    </div>
  );
}

export default App;
