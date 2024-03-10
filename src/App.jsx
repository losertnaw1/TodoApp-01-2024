import './App.css'
import ToDoApp from './components/ToDoApp'
import { TasksProvider } from './contexts/taskContext';

function App() {

  return (
    <>
      <TasksProvider>
        <ToDoApp></ToDoApp>
      </TasksProvider>
    </>
  )
}

export default App
