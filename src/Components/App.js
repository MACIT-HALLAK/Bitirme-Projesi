import './App.css';
import Title from './Title/Title';

import Card from './Card/Card';
import BookCategories from './BookCategories/BookCategories';
import Footer from './Footer/Footer';
//----Ana sayfa burasi----
function App() {
  return (
    <div className="layout">
      Header
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
