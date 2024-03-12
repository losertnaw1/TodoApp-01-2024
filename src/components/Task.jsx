/* eslint-disable react/prop-types */


function Task({task, handlerToogleEditStatus, toggleEdit, updateTask, handleDelete, taskEditingError, setTaskEditingError}) {

    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
    
        if (value.trim() === '') {
            setTaskEditingError(preErrMsg => ({ ...preErrMsg, [field]: 'This field cannot be empty' }));
        } else {
            setTaskEditingError(preErrMsg => ({ ...preErrMsg, [field]: '' }));
            updateTask((prevTask) => ({ ...prevTask, [field]: value }));
        }
      };

    return (
        <tr>
            <td>{task.id}</td>
            <td>
                {task.isEditing ? (
                <>
                    {taskEditingError.name !== "" && <span style={{ color: 'red' }}>{taskEditingError.name}</span>}
                    <input
                        type="text"
                        value={task.name}
                        name="name"
                        onChange={(e) => handleInputChange(e)}
                    />
                </>
                ) : (
                task.name
                )}
            </td>
            <td>
                {task.isEditing ? (
                <>
                    {taskEditingError.description !== "" && <span style={{ color: 'red' }}>{taskEditingError.description}</span>}
                    <input
                    type="text"
                    value={task.description}
                    name="desciption"
                    onChange={(e) => handleInputChange(e)}
                    />
                </>
                ) : (
                task.description
                )}
            </td>
            <td>
                <label className="switch">
                <input type="checkbox" checked={task.checked} onChange={() => handlerToogleEditStatus(task.id)}></input>
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
    )
}

export default Task;