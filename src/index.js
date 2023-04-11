import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Writer from './Components/Writer/Writer';
import Writerspage from "./Components/Writerspage/Writerspage";
import Seviyeler from "./Components/Seviyeler/Seviyeler";
import BookPage from "./Components/BookPage/BookPage";
import ReadingPage from "./Components/ReadingPage/ReadingPage";
import Deneme from "./Components/Deneme/Deneme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Anasayfa' element={<App />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Register' element={<Register />}/>
      <Route path='/Yazarlar' element={<Writerspage />}/>
      <Route path='/Seviyeler' element={<Seviyeler />}/>
      <Route path='/Writer' element={<Writer />}/>
      <Route path='/BookPage' element={<BookPage />}/>
      <Route path='/ReadingPage' element={<ReadingPage />}/>
      <Route path='/Deneme' element={<Deneme />}/>
    
      
    </Routes>
  </Router>
);
