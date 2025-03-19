export const addTask = (task) => ({
    type: 'TASK_ADD',
    payload: {
        task,
    },
});

export const removeTask = (id) => ({
    type: 'TASK_REMOVE',
    payload: {
        id,
    },
});

export const addTaskComment = (comment) => ({
    type: 'TASK_COMMENT_ADD',
    payload: {
        comment,
    },
});

export const removeTaskComment = (id) => ({
    type: 'TASK_COMMENT_REMOVE',
    payload: {
        id,
    },
});