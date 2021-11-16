import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTask,
  changeStatus,
  deleteTask,
  changeFilter,
} from '../features/taskSlice';
import { TiDeleteOutline } from 'react-icons/ti';

const TaskList = () => {
  const tasks = useSelector(selectTask);
  const dispatch = useDispatch();

  const statusHandler = (task) => {
    dispatch(changeStatus(task));
  };

  // console.log(tasks);
  let tasksToDisplay;
  switch (tasks.filters) {
    case 'completed':
      tasksToDisplay = tasks.tasks.filter((task) => task.status === true);
      break;
    case 'not-completed':
      tasksToDisplay = tasks.tasks.filter((task) => task.status === false);
      break;
    default:
      tasksToDisplay = tasks.tasks;
  }
  return (
    <div className='w-9/12 mx-auto'>
      {tasksToDisplay.length === 0 && (
        <div className='text-center  text-2xl text-red-200 m-4'>
          no tasks found
        </div>
      )}
      {tasksToDisplay.length > 0 &&
        tasksToDisplay.map((task) => {
          return (
            <div
              className='flex justify-between bg-white p-4 break-all shadow-lg shadow-inner'
              key={task.id}
            >
              <div>
                <input
                  type='checkbox'
                  className='mt-1 text-black'
                  defaultChecked={task.status}
                  onClick={() => {
                    statusHandler(task);
                  }}
                />
                <span
                  className='ml-4 text-black text-2xl'
                  style={{
                    textDecoration: task.status ? 'line-through' : '',
                    color: task.status ? '#FECACA' : 'black',
                  }}
                >
                  {task.task}
                </span>
              </div>
              <div
                className='mt-2 text-black text-2xl cursor-pointer hover:text-red-400'
                onClick={() => {
                  dispatch(deleteTask(task));
                }}
              >
                <TiDeleteOutline />
              </div>
            </div>
          );
        })}
      <div>
        <div className='flex justify-between w-4/12 mx-auto'>
          {['all', 'completed', 'not-completed'].map((filter) => {
            return (
              <button
                className='bg-red-100 hover:bg-red-200 font-semibold hover:text-white py-1 px-2  rounded cursor-pointer text-black mt-4'
                style={{
                  border: tasks.filters === filter ? '3px solid #FECACA' : '',
                }}
                onClick={() => {
                  dispatch(changeFilter(filter));
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
