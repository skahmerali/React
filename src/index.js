// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDom from "react-dom";
import css from "./index.css";
// var css =require("./index.css")


// function Ahmer(){
//   return <div className="div">
//     <head>
//       <title>
//         Ahmer.com
//       </title>
//     </head>
//     <h1 className="headName">Ahmer</h1>
//     <h4 className="headClass">NAVTTC class</h4>
//     <h6 className="headSir">
//       Sir IZAMAM MALIK
//     </h6>
//   <p>Hi !</p>
//   <div className="calculation">
//     <form>
//       <input id="inp1">
//        {/* { document.getElementById("inp1").value} */
//        54+54  
//        }
       
      
//       </input>
//       </form>
//      </div>
//   </div>
// }
// ReactDom.render(<Ahmer/>,document.querySelector('#root'))

function MediaCard (props){
  return  
  <div> <h2>{props.Title}</h2>

    <p>{props.Body}</p>
    
    <img src= {props.imameUrl} />

</div> 
} 

ReactDom.render(<MediaCard />,document.querySelector('#root'))



