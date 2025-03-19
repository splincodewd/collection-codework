import _ from 'lodash';
import {combineReducers} from 'redux';

const comments = (state = {}, action) => {
    switch (action.type) {
        case 'TASK_COMMENT_ADD': {
            const {comment} = action.payload;
            return {...state, [comment.id]: comment};
        }
        case 'TASK_COMMENT_REMOVE': {
            const {id} = action.payload;

            return _.omit(state, [id])
        }
        case 'TASK_REMOVE': {
            const {id} = action.payload;

            return _.omit(state, Object.values(state).filter(comment => comment.taskId === id).map(comment => comment.id));
        }
        default:
            return state;
    }
};

const tasks = (state = {}, action) => {
    switch (action.type) {
        case 'TASK_ADD': {
            const {task} = action.payload;
            return {...state, [task.id]: task};
        }
        case 'TASK_REMOVE': {
            const {id} = action.payload;

            return _.omit(state, [id])
        }
        default:
            return state;
    }
};

export default combineReducers({
    comments,
    tasks,
});
