import { useState } from "react";
import Function from "./Function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [val, setVal] = useState("");

  function handleClick() {
    if (val.trim()) {
      setTasks([...tasks, { id: Date.now(), text: val }]);
      setVal("");
    }
  }

  return (
    <div className="h-screen bg-indigo-400 text-center text-xl">
      <div className="m-2 border-2 border-orange-500 bg-orange-200 inline-block rounded">
        <div className="p-2">
          <span className="text-center text-red-900 font-bold">To Do List</span>
          <br />
          <input
            className="p-1 border-black border-2 h-10 rounded"
            type="text"
            placeholder="Enter Your Task"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            className="p-1 m-1 border-black border-2 rounded"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
          <div className="m-2 text-center">
            {tasks.map((task) => {
              return (
                <Function
                  key={task.id}
                  tasks={tasks}
                  task={task}
                  setTasks={setTasks}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;
