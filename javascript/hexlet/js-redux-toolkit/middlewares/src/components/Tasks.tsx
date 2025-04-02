import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;

const Tasks = ({ tasks }) => {
    const renderTask = (task) => (
        <li key={task.id} className="list-group-item d-flex">
      <span className="mr-auto">
        <a href="#" className="text-reset">{task.text}</a>
      </span>
        </li>
    );

    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="mt-3">
            <ul className="list-group">
                {tasks.map(renderTask)}
            </ul>
        </div>
    );
};

export default connect(mapStateToProps)(Tasks);
