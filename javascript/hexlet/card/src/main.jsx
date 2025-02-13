import { createRoot } from 'react-dom/client';
import Card from "./Card.jsx";

const text = 'collapse me';

createRoot(document.getElementById('container')).render(
    <Card>
        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Text</Card.Text>
        </Card.Body>
    </Card>
);

