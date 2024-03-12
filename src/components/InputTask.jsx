import { useState } from 'react'
import { useTasks } from '../contexts/TaskProvider';

function InputTask() {
  const { addTask, taskCreationError, setTaskCreationError } = useTasks();

  const [ task, setTask ] = useState({
    name : '',
    description : ''
  })

  const handleInputChange = (event, setTask) => {
    const value = event.target.value;
    const field = event.target.name;
    setTask(preTask => ({ ...preTask, [field]: value }));

    if (value.trim() === '') {
      setTaskCreationError(preErrMsg => ({ ...preErrMsg, [field]: 'This field cannot be empty' }));
    } else {
      setTaskCreationError(preErrMsg => ({ ...preErrMsg, [field]: '' }));
    }
  };

  const handleAddTask = () => {
    // all error message are empty
    let isValid = taskCreationError.name === "" && taskCreationError.description === "";

    if (isValid) {
      addTask(task.name, task.description);
    }
  };

  return (
    <div className="inputTask">
      <div className="input">
        {taskCreationError.name !== "" && <span style={{ color: 'red' }}>{taskCreationError.name}</span>}
        <input
          id='name'
          type="text"
          value={task.name}
          placeholder="Name"
          name='name'
          onChange={(e) => handleInputChange(e, setTask)}
        />
        {taskCreationError.description !== "" && <span style={{ color: 'red' }}>{taskCreationError.description}</span>}
        <input
          id='description'
          type="text"
          value={task.description}
          placeholder="Description..."
          name='description'
          onChange={(e) => handleInputChange(e, setTask)}
        />
      </div>
      <button onClick={(e) => handleAddTask(e)}>Add task</button>
    </div>
  );
}

export default InputTask;