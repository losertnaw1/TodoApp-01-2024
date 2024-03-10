/* eslint-disable react/prop-types */
import './listTask.css'
import { useTasks } from '../contexts/taskContext'

function ListTask({ tasks }) {
  const { onCheck, toggleEdit, handleNameChange, handleDescriptionChange, handleDelete } = useTasks();
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
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>
                  {task.isEditing ? (
                    <input
                      type="text"
                      value={task.name}
                      onChange={(e) => handleNameChange(e, task.id)}
                    />
                  ) : (
                    task.name
                  )}
                </td>
                <td>
                  {task.isEditing ? (
                    <input
                      type="text"
                      value={task.description}
                      onChange={(e) => handleDescriptionChange(e, task.id)}
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td>
                  <label className="switch">
                    <input type="checkbox" checked={task.checked} onChange={() => onCheck(task.id)}></input>
                    <span className="slider round"></span>
                  </label>
                </td>
                <td>
                  <button onClick={() => toggleEdit(task.id)}>
                    {task.isEditing ? "Save" : "Edit"}
                  </button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ListTask;