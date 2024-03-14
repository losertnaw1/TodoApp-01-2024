import { createContext, useState, useContext } from 'react';
// import PropTypes from 'prop-types';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

// eslint-disable-next-line react/prop-types
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Done the app',
      description: 'Come on finish it',
      checked: false,
    },
  ]);

  const [taskCreationError, setTaskCreationError] = useState({
    name: '',
    description: ''
  })

  const [currentTab, setCurrentTab] = useState('all');

  // TasksProvider.PropTypes = {
  //   children: PropTypes.object.isRequired
  // }

  const addTask = (name, description) => {
    const newTask = {
      id: tasks.length + 1,
      name: name,
      description: description,
      checked: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, taskCreationError, setTaskCreationError, addTask, currentTab, setCurrentTab }}>
      {children}
    </TasksContext.Provider>
  );
};