import { configureStore } from '@reduxjs/toolkit';
import reducers from "./reducers";
import {addTask, addTaskComment, removeTask} from "./actions";

const buildTask = (id, name) => ({ id, name });
const buildComment = (id, task, body) => ({ id, taskId: task.id, body });

const store = configureStore({ reducer: reducers });




store.dispatch(removeTask(1));


const task1 = buildTask(1, 'task1');
store.dispatch(addTask(task1));

const task2 = buildTask(2, 'task2');
store.dispatch(addTask(task2));

const comment1 = buildComment(1, task1, 'comment1');
store.dispatch(addTaskComment(comment1));


const comment2 = buildComment(2, task2, 'comment2');
store.dispatch(addTaskComment(comment2));

const comment3 = buildComment(3, task2, 'comment3');
store.dispatch(addTaskComment(comment3));

store.dispatch(removeTask(task2.id));

console.log(store.getState())