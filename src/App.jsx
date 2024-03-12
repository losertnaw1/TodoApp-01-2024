import './App.css'
import ToDoApp from './components/ToDoApp'
import { TasksProvider } from './contexts/TaskProvider';

function App() {

  return (
    <>
      <TasksProvider>
        <ToDoApp/>
      </TasksProvider>
    </>
  )
}

export default App
