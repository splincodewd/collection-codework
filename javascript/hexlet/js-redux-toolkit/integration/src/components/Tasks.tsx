// @ts-check

import React from 'react';
import { useSelector } from 'react-redux';

const Tasks = () => {
    const tasks = useSelector((state) => state.tasksStore.tasks);

    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="mt-3">
            <ul className="list-group">
                {tasks.map(({ id, text }) => (
                    <li key={id} className="list-group-item d-flex">
                        <span className="mr-auto">{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
