// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>Hare Krishna!!</h1>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>Hare Krishna!!</h1>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import MyComponent from './MyComponent';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import Communnity from './components/Community';
import Courses from './components/Courses';
import ContactUs from './components/ContactUs';
import MyComponent from './components/MyComponent';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='community' element={<Communnity/>}/>
          <Route path="contact" element={<ContactUs/>} />
          <Route path='/' element={<MyComponent/>}/>
      
      </Routes>


    </div>
  );
}


export default App;
