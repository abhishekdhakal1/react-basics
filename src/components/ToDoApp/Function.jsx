import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

function Function({ task, tasks, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(task.text);

  function save() {
    const updatedTask = tasks.map((t) =>
      t.id === task.id ? { ...t, text: val } : t
    );
    setTasks(updatedTask);
    setIsEditing(false);
  }

  function deleted(id) {
    const updatedData = tasks.filter((task) => task.id !== id);
    setTasks(updatedData);
  }

  return (
    <>
      <div>
        <button
          className="p-1 m-1 border-black border-2 rounded"
          onClick={() => {
            setIsEditing((currentMode) => !currentMode);
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

        <button
          className="p-1 m-1 border-black border-2 rounded"
          onClick={() => {
            deleted(task.id);
            console.log("deleted");
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {isEditing && (
          <button
            className="p-1 m-1 border-black border-2 rounded"
            onClick={save}
          >
            <FontAwesomeIcon icon={faFloppyDisk} />
          </button>
        )}

        <p>
          {isEditing ? (
            <input
              className="m-1 border-black border-2 h-10 rounded"
              type="text"
              defaultValue={task.text}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          ) : (
            task.text
          )}
        </p>
      </div>
    </>
  );
}
export default Function;
