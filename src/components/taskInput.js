import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, selectTask } from '../features/taskSlice';
import { collection, addDoc } from '@firebase/firestore';
import db from '../Firestore/firebase';

const TaskInput = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  const tasksCollectionRef = collection(db, 'tasks');

  const [key, setKey] = useState(0);
  const [task, setTask] = useState({ id: key, task: '', status: false });
  const changeHandler = (e) => {
    setTask({ ...task, task: e.target.value });
  };

  const submitHandler = () => {
    createTaskFirestore();
    dispatch(addTask({ ...task, id: tasks.tasks.length }));
    setTask({ id: tasks.tasks.length + 1, task: '', status: false });
    setKey((key) => tasks.tasks.length + 1);
  };

  const createTaskFirestore = async () => {
    await addDoc(tasksCollectionRef, { task: task.task, status: task.status });
  };

  return (
    <div className='text-center mt-10'>
      <div className='text-xl font-bold text-black'>
        <input
          value={task.task}
          onChange={(e) => changeHandler(e)}
          placeholder='enter task'
          className='outline-none w-9/12 p-4'
          onKeyPress={(e) => {
            if (e.key === 'Enter') submitHandler();
          }}
        />
      </div>
      {task.task.length > 0 ? (
        <button
          className='bg-white hover:bg-black font-semibold hover:text-white py-1 px-2  rounded cursor-pointer text-black m-4'
          onClick={() => {
            submitHandler();
          }}
        >
          Add task
        </button>
      ) : null}
    </div>
  );
};

export default TaskInput;
