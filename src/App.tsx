import React from 'react';
import Stars from './components/Stars';
import './App.css';

function App() {
    return (
        <div>
            <h1>Рейтинг фильмов</h1>
            <Stars count={4} /> {/* Показываем 4 звезды */}
        </div>
    );
}

export default App;
