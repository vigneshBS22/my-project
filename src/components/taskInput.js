import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(0);
  const [task, setTask] = useState({ id: key, task: "", status: false });
  const changeHandler = (e) => {
    setTask({ ...task, task: e.target.value });
  };

  return (
    <div className="text-center mt-10">
      <div className="text-xl font-bold text-white">
        <input
          value={task.task}
          onChange={(e) => changeHandler(e)}
          placeholder="enter task"
          className="bg-black outline-none border-b-4"
        />
      </div>
      {task.task.length > 0 ? (
        <button
          className="bg-white hover:bg-black font-semibold hover:text-white py-1 px-2  rounded cursor-pointer text-black mt-4"
          onClick={() => {
            dispatch(addTask(task));
            setTask({ id: key + 1, task: "", status: false });
            setKey((key) => key + 1);
          }}
        >
          Add task
        </button>
      ) : null}
    </div>
  );
};

export default TaskInput;
