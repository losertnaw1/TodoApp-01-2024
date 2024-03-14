/* eslint-disable react/prop-types */

import React ,{ useState, useCallback } from "react";
import { useTasks } from "../contexts/TaskProvider";


function TaskComponent({task}) {

    const { tasks, setTasks } = useTasks();

    const [ currentTask , setCurrentTask ] = useState(task);

    const [taskEditingError, setTaskEditingError] = useState({
        name: '',
        description: ''
    });

    const handlerToogleEditStatus = useCallback((id) => {
        if (currentTask.id === id) {
            setCurrentTask(prevTask => ({ ...prevTask, checked: !prevTask.checked }));
        }

        const newTask = tasks.map(task => {
          if (task.id === id) {
            return { ...task, checked: !task.checked };
          }
          return task;
        });
    
        setTasks(newTask);
    }, [tasks, setTasks, currentTask, setCurrentTask]);

    const toggleEdit = useCallback((taskId) => {
        const newTask = tasks.map(task => {
            if (task.id === taskId) {
            // If task state is editing, save the changes
                if (task.isEditing) {
                    return { ...currentTask, isEditing: false };
                } else {
                    // Switch to editing state
                    return { ...task, isEditing: true };
                }
            }
            return task;
        })
        setTasks(newTask);
    },[tasks, setTasks, currentTask]);

    const handleDelete = useCallback((taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }, [tasks,setTasks]);

    const handleInputChange = useCallback((event) => {
        const value = event.target.value;
        const field = event.target.name;

        setCurrentTask((prevTask) => ({...prevTask , [field] : value  }));
    
        if (value.trim() === '') {
            setTaskEditingError(preErrMsg => ({ ...preErrMsg, [field]: 'This field cannot be empty' }));
        } else {
            setTaskEditingError(preErrMsg => ({ ...preErrMsg, [field]: '' }));
        }
      }, []);

    return (
        <tr>
            <td>{task.id}</td>
            <td>
                {task.isEditing ? (
                <>
                    {taskEditingError.name !== "" && <span style={{ color: 'red' }}>{taskEditingError.name}</span>}
                    <input
                        type="text"
                        value={currentTask.name}
                        name="name"
                        onChange={(e) => handleInputChange(e)}
                    />
                </>
                ) : (
                    currentTask.name
                )}
            </td>
            <td>
                {task.isEditing ? (
                <>
                    {taskEditingError.description !== "" && <span style={{ color: 'red' }}>{taskEditingError.description}</span>}
                    <input
                    type="text"
                    value={currentTask.description}
                    name="description"
                    onChange={(e) => handleInputChange(e)}
                    />
                </>
                ) : (
                    currentTask.description
                )}
            </td>
            <td>
                <label className="switch">
                <input type="checkbox" checked={currentTask.checked} onChange={() => handlerToogleEditStatus(currentTask.id)}></input>
                <span className="slider round"></span>
                </label>
            </td>
            <td>
                <button onClick={() => toggleEdit(currentTask.id)}>
                {task.isEditing ? "Save" : "Edit"}
                </button>
                <button onClick={() => handleDelete(currentTask.id)}>Delete</button>
            </td>
        </tr>
    )
}

const Task = React.memo(TaskComponent);

export default Task;