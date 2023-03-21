<<<<<<< HEAD
import "./App.css";
import Title from "./Title/Title";
import Card from "./Card/Card";
import BookCategories from "./BookCategories/BookCategories";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navber";
=======
import './App.css';
import Title from './Title/Title';

import Card from './Card/Card';
import BookCategories from './BookCategories/BookCategories';
import Footer from './Footer/Footer';
>>>>>>> cbe46b749dc4f6d64bd1bd980dae21f06fac6461
//----Ana sayfa burasi----
function App() {
  return (
    <div className="layout">
      <Navbar />
      <section>
        <Title />
        <div className="parent">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <BookCategories />
      <Footer />
    </div>
  );
}

export default App;
