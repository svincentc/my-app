import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './components/About.js'
import Footer from './components/Footer.js'
import Interests from './components/Interests.js'
import MyInfo from './components/MyInfo.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class='content-card'>
      <MyInfo />
      <AboutMe />
      <Interests />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
