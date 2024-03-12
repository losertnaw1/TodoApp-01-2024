import './inputTask.css'
import InputTask from './InputTask'
import Tabs from './Tabs'

function ToDoApp() {
  return (
    <>
      <h1>Todo App</h1>
      <InputTask />
      <Tabs />
      {/* Input Task Component */}
      {/* <div className="inputTask">
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
        <button onClick={(e) => handleAddtask(e, input1, input2)}>Add task</button>
      </div> */}
      {/* <InputTask
        input1={input1}
        setInput1={setInput1}
        input2={input2}
        setInput2={setInput2}
        error1={error1}
        error2={error2}
        setError1={setError1}
        setError2={setError2}
        handleInputChange={handleInputChange}
        handleAddtask={handleAddtask}
      ></InputTask> */}

      {/* List Tasks Component */}
      {/* <div className="listTask">
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
            {tasks.map((task) => {
              return <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                <label className="switch">
                  <input type="checkbox" {...task.checked ? 'checked' : ''}></input>
                  <span className="slider round"></span>
                </label>
                </td>
                <td>
                  <button>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div> */}
      {/* <ListTask tasks={tasks} /> */}
    </>
  )
}

export default ToDoApp
