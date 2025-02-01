import { createRoot } from 'react-dom/client';
import Collapse from "./Collapse.jsx";

const text = 'collapse me';

createRoot(document.getElementById('container')).render(
    <Collapse text={text} />
);

