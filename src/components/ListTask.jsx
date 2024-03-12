/* eslint-disable react/prop-types */
import './listTask.css'
import { useMemo } from 'react'
import { useTasks } from '../contexts/TaskProvider'
import Task from './Task';

function ListTask({ tasks }) {

  const { handlerToogleEditStatus, toggleEdit, updateTask, handleNameChange, handleDescriptionChange, handleDelete, taskEditingError, setTaskEditingError } = useTasks();

  const taskComponents = useMemo(() => 
  tasks.map(task => 
    <Task
      key={task.id}
      task={task}
      handleNameChange={handleNameChange}
      handleDescriptionChange={handleDescriptionChange}
      toggleEdit={toggleEdit}
      handleDelete={handleDelete}
      handlerToogleEditStatus={handlerToogleEditStatus}
      taskEditingError={taskEditingError}
      setTaskEditingError={setTaskEditingError}
      updateTask={(updatedTask) => updateTask(task.id, updatedTask)}
    />
  ), 
  [tasks, handlerToogleEditStatus, toggleEdit, updateTask, handleNameChange, handleDescriptionChange, handleDelete, taskEditingError, setTaskEditingError]
);
    return (
      <div className="listTask">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Checked</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {taskComponents}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ListTask;