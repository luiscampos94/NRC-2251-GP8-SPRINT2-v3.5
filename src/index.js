import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_Register from './App_Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from
"react-router-dom";
import App_Forgot from './App_Forgot';
import App_Manager from './App_Manager';
import App_Consulta from './App_Consulta';
import App_Create from './App_Create';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/App_Register" element={<App_Register/>} />
      <Route path="/App_Forgot" element={<App_Forgot/>} />
      <Route path="/App_Manager" element={<App_Manager/>} />
      <Route path="/App_Consulta" element={<App_Consulta/>} />
      <Route path="/App_Create" element={<App_Create/>} />

    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
