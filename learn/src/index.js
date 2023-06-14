import createRoot from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default function Dummy(){
    return(
        <h1>this is dummy</h1>
    )
}