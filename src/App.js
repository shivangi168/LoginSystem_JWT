import './App.scss';
import './sass/_login.scss';

import Login from "./components/Pages/Login.js";
import Register from './components/Pages/Register';
import Home from './components/Pages/Home.js';
// import BaseLogin from "./components/inbox/BaseLogin.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/login" component={Loginform}></Route> */}
              <Route exact path="/" element={<Home/>} />

              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />


            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

// // import logo from './logo.svg';
// import './App.scss';
// import './sass/_login.scss';

// import Loginform from "./components/inbox/Loginform.jsx";
// import BaseLogin from "./components/inbox/BaseLogin.jsx";
// import {BrowserRouter,Switch,Route} from 'react-router-dom';


// function App() {
//   return (
//     <div id="login">
//     {/* <div className="d-flex justify-content-center"></div> */}
//     <div className="container">
//       <div className="row login-box">
      
//       <BrowserRouter>
//         <Switch>
//           <Route path="/login" component={Loginform}></Route>
//         </Switch>
//       </BrowserRouter>
//         </div>
//       </div>
//     </div>
  
//   );
// }

// export default App;
