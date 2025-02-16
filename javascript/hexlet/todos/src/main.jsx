import { createRoot } from 'react-dom/client';
import TodoBox from "./TodoBox.jsx";

createRoot(document.getElementById('container')).render(
    <TodoBox />
);

