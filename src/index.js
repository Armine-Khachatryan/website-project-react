import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
        <App />
        <ToastContainer
            autoClose={2000}
            newestOnTop={true}
            closeOnClick={true}
            draggable={true}
            pauseOnHover={false}
            style={{paddingTop: "80px"}}
        />
    </>
);
