import { useState } from "react";
import moment from "moment";
import { BiTrash } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { BsSave } from "react-icons/bs";

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
      <div className="flex">
        <p>
          {isEditing ? (
            <input
              className="p-1 border-2 h-10 rounded focus:outline-none"
              type="text"
              defaultValue={task.text}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          ) : (
            <div className="mt-2 font-semibold">
              <p className="text-primaryRed font-semibold">
               {moment().format('dddd, MMMM D')}
              </p>
              <div className="ml-3 mt-2 flex">{task.text}
              <button
                className="ml-1 p-1"
                onClick={() => {
                  setIsEditing((currentMode) => !currentMode);
                }}
              >
                <GoPencil className="text-primaryOrange h-4 w-4" />
              </button>

              <button
                className="p-1"
                onClick={() => {
                  deleted(task.id);
                }}
              >
                <BiTrash className="text-primaryOrange text-xl h-4 w-4" />
              </button>
              </div>
            </div>
          )}
        </p>

        {isEditing && (
          <button className="p-1" onClick={save}>
            <BsSave className="text-primaryOrange text-xl" />
          </button>
        )}
      </div>
    </>
  );
}
export default Function;
