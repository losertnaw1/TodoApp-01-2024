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

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

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

  const onCheck = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    }));
  }

  function toggleEdit(taskId) {
    setTasks(tasks.map(task => {
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
    }));
  }

  function handleNameChange(e, taskId) {
    const newName = e.target.value;
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, name: newName };
      }
      return task;
    }));
  }

  function handleDescriptionChange(e, taskId) {
    const newDescription = e.target.value;
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, description: newDescription };
      }
      return task;
    }));
  }

  function handleDelete(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <TasksContext.Provider value={{ tasks, onCheck, toggleEdit, handleNameChange, handleDescriptionChange, handleDelete,  addTask, error1, setError1, error2, setError2, currentTab, setCurrentTab }}>
      {children}
    </TasksContext.Provider>
  );
};