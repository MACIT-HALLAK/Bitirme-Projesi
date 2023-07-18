import React, { useEffect, useMemo, useState } from 'react';
import './Navbar.css';
import { FaClosedCaptioning, FaSearch } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import NavEelements from './navElements/NavEelements';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { useCookies } from 'react-cookie';
import { FaRegWindowClose } from 'react-icons/fa';
import axios from 'axios';
import { useRef } from 'react';

const Navbar = () => {
  const [value, setValue] = useState(() => '');
  const [searchValue, setSearchValue] = useState(() => '');
  const [handle, setHandle] = useState(() => false);
  const [btn_state, setBtnState] = useState(() => false);
  const [cookies, setCookies, removeCookies] = useCookies(['email', 'role']);
  const [bookdata, setBookdata] = useState([]);
  const [filteredBookdata, setFilteredBookdata] = useState([]);
  const searchBox = useRef();

  function logout() {
    removeCookies('email', { path: '/' });
    removeCookies('role', { path: '/' });
    window.location.pathname = '/';
  }

  const resetBookData = () => {
    setFilteredBookdata([]);
    setValue('');
    searchBox.current.classList.remove('searched');
    document.querySelector('.searched-element').classList.remove('search-hide');
  };

  const keepValue = () => {
    if (searchBox.current.value.length > 0) {
      searchBox.current.classList.add('searched');
      document.querySelector('.searched-element').classList.add('search-hide');
    } else {
      setValue('');
      searchBox.current.classList.remove('searched');
      document
        .querySelector('.searched-element')
        .classList.remove('search-hide');
      setFilteredBookdata([]);
    }
  };

  useMemo(async () => {
    const res = await axios.get(
      'https://librarygop.com/public/index.php/api/getallbooks'
    );
    setBookdata(res.data);
    // console.log(res.data);
  }, [window.onload]);

  function handleClick() {
    setBtnState((btn_state) => !btn_state);
  }

  function trigger() {
    setHandle((prev) => !prev);
  }

  const getSearchedBooks = async (event) => {
    event.preventDefault();
    if (event.target.value.length === 0) {
      setFilteredBookdata([]);
    } else {
      setFilteredBookdata(
        bookdata.filter((item) => {
          return item.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      );
    }
  };

  let toggle_class_check = btn_state ? 'hide' : '';
  let nav_items = ['Anasayfa', 'Yazarlar', 'Seviyeler'];
  let admin_items = ['Add Book', 'YazarEkle'];

  // if user not admin filter array
  if (cookies.role === '1') nav_items = nav_items.concat(admin_items);
  return (
    <>
      <nav>
        <FaList className="menu-bars" onClick={handleClick} />
        <ul className={`main-nav ${toggle_class_check}`}>
          {/* call main elments in navbar */}
          {nav_items.map((element, index) => {
            return element === 'Seviyeler' ? (
              <NavEelements
                element={element}
                key={index}
                clicking={() => trigger()}
                handle={handle}
              />
            ) : (
              <NavEelements element={element} key={index} />
            );
          })}
          <li>
            <ul>
              <li className="alt-box">
                <div className="box">
                  <form name="search" onSubmit={getSearchedBooks}>
                    <input
                      type="text"
                      autocomplete="off"
                      className="input"
                      name="txt"
                      ref={searchBox}
                      value={value}
                      onMouseEnter={() => setValue()}
                      onMouseLeave={keepValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                        getSearchedBooks(e);
                      }}
                    ></input>
                  </form>
                  <FaSearch className="searched-element" />
                </div>

                <div className="auth">
                  {!cookies.email ? (
                    <>
                      <Link
                        to="/Register"
                        data-lang="linkler"
                        className="btn-auth"
                      >
                        Register
                      </Link>
                      <Link
                        to="/Login"
                        data-lang="linkler"
                        className="btn-auth"
                      >
                        Login
                      </Link>
                    </>
                  ) : (
                    <div onClick={logout} className="btn-auth">
                      logout
                    </div>
                  )}
                </div>
              </li>
              {filteredBookdata[0] !== undefined ? (
                <>
                  <ul
                    className="search-values"
                    title="scroll to show another results"
                  >
                    <FaRegWindowClose
                      className="closing-tag"
                      onClick={resetBookData}
                    ></FaRegWindowClose>
                    {filteredBookdata?.map((item) => {
                      return (
                        <Link to={`/ReadingPage/${item.id}`} className="link">
                          <li key={item.id}>
                            {item.title}
                            <img
                              src={`data:image/jpeg;base64,${item.conten_book}`}
                              alt={item.title}
                            ></img>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </>
              ) : (
                ''
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
