
import { h } from 'preact';
import { useState } from 'preact/hooks';

const TaskManager = () => {
    const [taskInput, setTaskInput] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = async () => {
        if (taskInput.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }

        const newTask = {
            id: Date.now(),
            name: taskInput,
        };

        setTaskList([...taskList, newTask]);
        setTaskInput('');
        alert('Task added successfully!');
    };

    const removeTask = (id) => {
        const updatedTasks = taskList.filter(task => task.id !== id);
        setTaskList(updatedTasks);
        alert('Task removed successfully!');
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Task Manager</h2>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem' }}>
                <input
                    type="text"
                    value={taskInput}
                    onInput={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter a new task"
                    style={{ padding: '0.5rem', marginBottom: '0.5rem', border: '1px solid #ccc' }}
                />
                <button
                    onClick={addTask}
                    style={{ padding: '0.5rem', background: '#28a745', color: 'white', border: 'none' }}
                >
                    Add Task
                </button>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {taskList.map(task => (
                    <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>{task.name}</span>
                        <button
                            onClick={() => removeTask(task.id)}
                            style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.2rem 0.5rem' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
