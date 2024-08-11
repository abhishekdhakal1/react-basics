import { useState } from "react";
import { MdDelete, MdSaveAlt, MdEditNote } from "react-icons/md";

function Function({ task, tasks, setTasks, year, month, day }) {
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
      <div className="flex justify-center">
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
            <div>
              <p className="text-primaryOrange font-semibold">
                {`${year} - ${month} - ${day}`}
              </p>
              <p>{task.text}</p>
            </div>
          )}
        </p>
        <button
          className="p-1 m-1"
          onClick={() => {
            setIsEditing((currentMode) => !currentMode);
          }}
        >
          <MdEditNote className="text-primaryOrange text-3xl" />
        </button>

        <button
          className="p-1 m-1"
          onClick={() => {
            deleted(task.id);
            console.log("deleted");
          }}
        >
          <MdDelete className="text-primaryOrange text-3xl" />
        </button>
        {isEditing && (
          <button className="p-1 m-1" onClick={save}>
            <MdSaveAlt className="text-primaryOrange text-3xl" />
          </button>
        )}
      </div>
    </>
  );
}
export default Function;
