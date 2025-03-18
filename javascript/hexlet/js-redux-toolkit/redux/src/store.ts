import omit from 'lodash/omit';
import { createStore } from 'redux';

const reducer = (state = {}, action) => { // Инициализация состояния
    switch (action.type) {
        case 'TASK_ADD': {
            const { task } = action.payload;
            return {...state, [task.id]: task};
        }
        case 'TASK_REMOVE': {
            const { id } = action.payload;

            return omit(state, [id])
        }
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log(store.getState());