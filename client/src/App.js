import React, { useState } from 'react';
import './index.css';

function App() {
    const [message, setMessage] = useState('');

    const fetchMessage = () => {
        fetch('http://localhost:8080/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching the message:', error));
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>React + Node.js Example</h1>
                <button onClick={fetchMessage}>Fetch Message</button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
