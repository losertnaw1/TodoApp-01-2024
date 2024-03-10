import { useTasks } from '../contexts/taskContext'
import ListTasks from './ListTaskCom'
import './tabs.css'

const Tabs = () => {
    const {tasks, currentTab, setCurrentTab} = useTasks();
  
    return (
      <div className='tabs'>
        <button
            onClick={() => {
                setCurrentTab("all");
            }}
            className={currentTab === 'all' ? 'selected' : 'unselected'}
        >All</button>
        <button 
            onClick={() => setCurrentTab('unchecked')}
            className={currentTab === 'unchecked' ? 'selected' : 'unselected'}
        >Todo</button>
        <button
            onClick={() => setCurrentTab('checked')}
            className={currentTab === 'checked' ? 'selected' : 'unselected'}
        >Done</button>
  
        {currentTab === 'all' ?
        ( <ListTasks tasks={tasks} />) : currentTab === 'unchecked' ? (
          <ListTasks tasks={tasks.filter(task => !task.checked)} />
        ) : (
          <ListTasks tasks={tasks.filter(task => task.checked)} />
        )}
      </div>
    );
  }

export default Tabs