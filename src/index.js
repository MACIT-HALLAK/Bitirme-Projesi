import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Writer from './Components/Writer/Writer';
import Writerspage from './Components/Writerspage/Writerspage';
import Seviyeler from './Components/Seviyeler/Seviyeler';
import BookPage from './Components/BookPage/BookPage';
import SettingCom from './Components/Ayarlar/SettingCom';
import ReadingPage from './Components/ReadingPage/ReadingPage';
import BackTo from './Components/BackTo/BackTo';
import Deneme from './Components/Deneme/Deneme';
import Categories from './Components/Categories/Categories';
import WordsPage from './Components/WordsPage/WordsPage';
import PrivateRoutes from './Components/utils/PrivateRoutes';
import QuotePage from './Components/QuotePage/QuotePage';
import AddBook from './Components/AddBooks/AddBook';
import AddWriter from './Components/AddWriter/AddWriter';
import EmailConfirm from './Components/EmailConfirm/EmailConfirm';
import MostRepeatedBooks from './Components/MostRepeatedBooks/MostRepeatedBooks';
import { DataContext } from './Components/DataContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RootComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!data) {
        const response = await axios.get(
          'https://deneme.librarygop.com/public/index.php/api/getnewerbooks'
        );
        setData(response.data);
      }
    };

    fetchData();
  }, [data]);

  return (
    <DataContext.Provider value={data}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Anasayfa" element={<App />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/Yazarlar" element={<Writerspage />} />
            <Route path="/Seviyeler" element={<Seviyeler />} />
            <Route path="/Seviyeler/ileri" element={<Seviyeler />} />
            <Route path="/Seviyeler/orta" element={<Seviyeler />} />
            <Route path="/Seviyeler/temel" element={<Seviyeler />} />
            <Route path="/Writer" element={<Writer />} />
            <Route path="/Writer/:writerId" element={<Writer />} />
            <Route path="/AddBook" element={<AddBook />} />
            <Route path="/BookPage" element={<BookPage />} />
            <Route path="/BookPage/:level" element={<BookPage />} />
            <Route path="/MostRepeatedBooks" element={<MostRepeatedBooks />} />
            <Route path="/YazarEkle" element={<AddWriter />} />
            <Route path="/ReadingPage" element={<ReadingPage />} />
            <Route path="/ReadingPage/:bookId" element={<ReadingPage />} />
            <Route path="/Deneme" element={<Deneme />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/settings" element={<SettingCom />} />
            <Route path="/BackTo" element={<BackTo />} />
            <Route path="/WordsPage" element={<WordsPage />} />
            <Route path="/QuotePage" element={<QuotePage />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/EmailConfirm" element={<EmailConfirm />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
