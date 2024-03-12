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

  const [taskEditingError, setTaskEditingError] = useState({
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

  const handlerToogleEditStatus = (id) => {
    const newTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(newTask);
  }

  function toggleEdit(taskId) {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        // If task state is editing, save the changes
        if (task.isEditing) {
          return { ...task, isEditing: false };
        } else {
          // Switch to editing state
          return { ...task, isEditing: true };
        }
      }
      return task;
    })
    setTasks(newTask);
  }

  const updateTask = (taskId, updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => (task.id === taskId ? updatedTask : task)));
  };

  function handleDelete(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks, updateTask, taskCreationError, taskEditingError, setTaskCreationError, setTaskEditingError, handlerToogleEditStatus, toggleEdit, handleDelete,  addTask, currentTab, setCurrentTab }}>
      {children}
    </TasksContext.Provider>
  );
};