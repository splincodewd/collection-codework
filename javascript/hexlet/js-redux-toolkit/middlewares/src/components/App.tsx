import React from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks';

const App = () => (
    <div className="col-5">
        <NewTaskForm />
        <Tasks />
    </div>
);
export default App;
