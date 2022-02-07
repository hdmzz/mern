import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PostProvider } from "./context/PostContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

