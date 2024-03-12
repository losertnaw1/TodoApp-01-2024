import { useTasks } from '../contexts/TaskProvider'
import ListTasks from './ListTask'
import './tabs.css'
import TaskConstants from '../constants/task.constants'

const { ALL, TODO, DONE} = TaskConstants.taskStatus;
const { UNCHECKED, CHECKED} = TaskConstants.tabStatus;

const Tabs = () => {
    const {tasks , currentTab, setCurrentTab} = useTasks();

    const tabs = [
      {
        key: ALL,
        text: 'All'
      },
      {
        key: TODO,
        text: 'Todo'
      },
      {
        key: DONE,
        text: 'Done'
      },
    ]

    const doneTask = tasks.filter(task => task.checked);
    const todoTask = tasks.filter(task => !task.checked);
  
    return (
      <div className='tabs'>
        {
        tabs.map(t => {
          const { key, text } = t
          return (
            <button
              key={key}
              onClick={() => {
                setCurrentTab(key);
              }}
              className={currentTab === key ? CHECKED : UNCHECKED}
            >
              {text}
            </button>
          )
        })
      }
      {currentTab === ALL && <ListTasks tasks={tasks} />}
      {currentTab === TODO && <ListTasks tasks={todoTask} />}
      {currentTab === DONE && <ListTasks tasks={doneTask} />}
      </div>

    );
  }

export default Tabs