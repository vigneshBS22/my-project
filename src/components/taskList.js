import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTask, changeStatus, deleteTask } from "../features/taskSlice";
import { AiFillDelete } from "react-icons/ai";

const TaskList = () => {
  const tasks = useSelector(selectTask);
  const dispatch = useDispatch();

  const statusHandler = (task) => {
    dispatch(changeStatus(task));
  };

  // console.log(tasks);

  return (
    <div className="m-10">
      {tasks.tasks.length === 0 && (
        <div className="text-center  text-2xl text-white">no tasks added</div>
      )}
      {tasks.tasks.length > 0 &&
        tasks.tasks.map((task) => {
          return (
            <div
              className="flex justify-between m-2 bg-white p-4 break-all"
              key={task.id}
            >
              <div>
                <input
                  type="checkbox"
                  className="mt-1"
                  defaultChecked={task.status}
                  onClick={() => {
                    statusHandler(task);
                  }}
                />
                <span
                  className="ml-4 text-black text-2xl"
                  style={{ textDecoration: task.status ? "line-through" : "" }}
                >
                  {task.task}
                </span>
              </div>
              <div
                className="mt-2 text-black text-2xl cursor-pointer"
                onClick={() => {
                  dispatch(deleteTask(task));
                }}
              >
                <AiFillDelete />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TaskList;
