import './App.css';
import TaskInput from './components/taskInput';
import TaskList from './components/taskList';

function App() {
  return (
    <div className='min-h-screen bg-red-50'>
      <div className='text-center text-6xl text-red-200 font-mono pt-8'>
        Todos
      </div>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
