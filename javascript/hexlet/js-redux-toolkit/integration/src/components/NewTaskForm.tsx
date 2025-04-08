import React, { useState } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/tasksSlice.js';

const NewTaskForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleAddTask = (e) => {
        e.preventDefault();
        const task = { text, id: _.uniqueId() };
        dispatch(addTask({ task }));
        setText('');
    };

    const handleUpdateNewTaskText = (e) => setText(e.target.value);

    return (
        <form action="" className="form-inline" onSubmit={handleAddTask}>
            <div className="form-group mx-sm-3">
                <input
                    type="text"
                    data-testid="input"
                    required
                    value={text}
                    onChange={handleUpdateNewTaskText}
                />
            </div>
            <input type="submit" data-testid="submit" className="btn btn-primary btn-sm" value="Add" />
        </form>
    );
};

export default NewTaskForm;
