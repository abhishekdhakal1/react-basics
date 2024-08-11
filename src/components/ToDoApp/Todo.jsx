import { useState } from "react";
import Function from "./Function";
import { MdOutlineAddTask, MdOutlineAdd } from "react-icons/md";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [val, setVal] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  function handleClick() {
    if (val.trim()) {
      setTasks([...tasks, { id: Date.now(), text: val }]);
      setVal("");
      setIsAdd(false);
    }
  }
  function add() {
    setIsAdd((currentMode) => !currentMode);
  }

  return (
    <div className="h-screen bg-lightRed flex justify-center items-center">
      <div className="relative h-custom w-custom bg-primaryWhite rounded-xl">
        <div>
          <div>
            <span className="font-semibold h-[28.07px] mt-[47.17px] ml-custom text-[23.8px] inline-block">
              To Do List
            </span>
            {isAdd && (
              <div className="ml-custom transform translate-y-[5px] flex">
                <input
                  className="p-1 border-black border-2 h-10 rounded"
                  type="text"
                  placeholder="Enter Your Task"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
                <button className="p-1.5" onClick={handleClick}>
                  <MdOutlineAddTask className=" text-primaryOrange text-3xl" />
                </button>
              </div>
            )}

            <div className="m-2 text-center">
              <div>
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
        <div>
          {" "}
          <br />
          {isAdd ? (
            <div></div>
          ) : (
            <button
              onClick={add}
              className="absolute bottom-5 right-5"
            >
              <MdOutlineAdd className="text-[30px] h-[37px] w-[37px] text-primaryWhite bg-primaryRed rounded-full" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Todo;
