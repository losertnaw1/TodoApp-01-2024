/* eslint-disable react/prop-types */
import './listTask.css'
import Task from './Task';

function ListTask({ tasks }) {

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
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
            />
          ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ListTask;