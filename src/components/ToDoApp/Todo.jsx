import { useState } from "react";
import Function from "./Function";
import DateAD from "./Date";
import { IoMdAddCircle } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";

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
    <div className="h-screen bg-lightRed flex justify-center text-xl">
      <div className="relative h-custom mt-2 w-custom bg-primaryWhite rounded-xl text-center">
        <div className="">
          <div className="p-2">
            <span className="text-center text-primaryRed font-bold">
              To Do List
            </span>
            {isAdd && (
              <div className="flex justify-center mt-1">
                <input
                  className="p-1 border-black border-2 h-10 rounded"
                  type="text"
                  placeholder="Enter Your Task"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
                <button className="p-1.5" onClick={handleClick}>
                  <IoMdAddCircle className=" text-primaryOrange text-3xl" />
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
                      year = {DateAD.year}
                      month = {DateAD.month}
                      day = {DateAD.day}
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
              className="p-2 border-2 border-lightRed bg-lightRed rounded-full absolute left-[350px] top-[630px]"
            >
              <MdOutlineAdd className="text-primaryWhite" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Todo;
