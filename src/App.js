import logo from './logo.svg';
import './App.scss';
import React from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
const PublicPortal = React.lazy(() => import("./pages/index"));


function App() {
  return (
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
      <div>
        <React.Suspense>
          <Routes>
            <Route
              path="/*"
              element={
                <React.Suspense fallback="">
                  <PublicPortal />
                </React.Suspense>
              }
            />
          </Routes>
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
