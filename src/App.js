import './App.css';
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="text-center text-2xl font-bold text-white">
        To-do list
      </div>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
