import { useState } from 'react';
import { useTasks } from '../contexts/taskContext';

function InputTask() {
  const { addTask, error1, setError1, error2, setError2 } = useTasks();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleInputChange = (event, setInput, setError) => {
    const value = event.target.value;
    setInput(value);

    if (value.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleAddTask = () => {
    let isValid = true;
    
    if (!input1.trim()) {
      setError1(true);
      isValid = false;
    } else {
      setError1(false);
    }

    if (!input2.trim()) {
      setError2(true);
      isValid = false;
    } else {
      setError2(false);
    }

    if (isValid) {
      addTask(input1, input2);
      setInput1('');
      setInput2('');
    }
  };


  return (
    <div className="inputTask">
      <div className="input">
        {error1 && <span style={{ color: 'red' }}>Name cannot be empty</span>}
        <input
          id='name'
          type="text"
          value={input1}
          placeholder="Name"
          onChange={(e) => handleInputChange(e, setInput1, setError1)}
        />
        {error2 && <span style={{ color: 'red' }}>Description cannot be empty</span>}
        <input
          id='description'
          type="text"
          value={input2}
          placeholder="Description..."
          onChange={(e) => handleInputChange(e, setInput2, setError2)}
        />
      </div>
      <button onClick={(e) => handleAddTask(e)}>Add task</button>
    </div>
  );
}

export default InputTask;