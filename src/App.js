import logo from './logo.svg';
import './App.scss';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
const PublicPortal = React.lazy(() => import("./pages/index"));


function App() {
  return (
    // <>
    //   <Routes>
    //     <Route 
    //       path="/*"
    //       element={
    //         <PublicPortal />
    //       }
    //     />
    //   </Routes>
    // </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <PublicPortal /> */}
      <SignIn />
    </>
  );
}

export default App;
