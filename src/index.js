import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HousesList from "./Components/HousesList";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./Components/Main";
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );
ReactDOM.render(

  <BrowserRouter>

      <Routes>

          {/* <Route path="/" component={App}/> */}
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/HousesList" element={<HousesList/>}/>


      </Routes>

  </BrowserRouter>

, document.getElementById('root'));

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
