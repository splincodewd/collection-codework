// @ts-check

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    console.log(state);

    const props = {
        text: state.text,
    };
    return props;
};

const actionCreators = {
    updateNewTaskText: actions.updateNewTaskText,
    addTask: actions.addTask,
};

const NewTaskForm = ({
                         addTask,
                         text,
                         updateNewTaskText,
                     }) => {
    const handleAddTask = (e) => {
        e.preventDefault();
        const task = { text, id: _.uniqueId(), state: 'active' };
        addTask({ task });
    };

    const handleUpdateNewTaskText = (e) => {
        updateNewTaskText({ text: e.target.value });
    };

    console.log('text', text);

    return (
        <form action="" className="form-inline" onSubmit={handleAddTask}>
            <div className="form-group mx-sm-3">
                <input
                    type="text"
                    required
                    value={text}
                    onChange={handleUpdateNewTaskText}
                />
            </div>
            <input type="submit" className="btn btn-primary btn-sm" value="Add" />
        </form>
    );
};

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
