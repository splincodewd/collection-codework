const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const addDate = (store) => (next) => (action) => {
    if (action.type === 'TASK_ADD') {
        return next({
            ...action, payload: {
                ...action.payload,
                task: {
                    ...action.payload.task,
                    text: `Задача на ${new Date().toLocaleDateString('ru-RU')}: ${action.payload.task.text}`,
                }
            }
        });
    }

    next(action);
};

export default {logger, addDate};
