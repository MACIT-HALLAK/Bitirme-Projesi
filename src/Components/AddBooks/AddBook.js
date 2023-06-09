import React, { useState } from 'react';
import './AddBook.css';
import CustomFileInput from './CustomFileInput';
import axios from 'axios';
import BackTo from '../BackTo/BackTo';
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setdesc] = useState('');
  const [coverImageBook, setCoverImageBook] = useState(null);
  const [coverImageAuthor, setCoverImageAuthor] = useState(null);
  const [NameImageBook, setNameImageBook] = useState(null);
  const [NameImageAuthor, setNameImageAuthor] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [lang, setLang] = useState('');
  const [pageCount, setPageCount] = useState();
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(coverImage);
    try {
      setUploading(true);

      // Make POST request using Axios
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('pageNumber', pageCount);
      formData.append('langueg', lang);
      formData.append('categori', category);
      formData.append('level', level);
      formData.append('desc', desc);
      formData.append('content', content);
      formData.append('book_img', coverImageBook);
      formData.append('author_img', coverImageAuthor);
      formData.forEach((e) => {
        console.log(e);
      });

      // // Make POST request to upload image using Axios
      const response = await axios.post(
        'https://librarygop.com/public/index.php/api/addbook',
        formData
      );

      // // Reset form after successful upload
      setUploading(false);
      setUploaded(true);
      setTitle('');
      setAuthor('');
      setdesc('');
      setCoverImageAuthor(null);
      setCoverImageBook(null);
      setCategory('');
      setLevel('');
      setLang('');
      setPageCount(0);
      setContent('');
    } catch (error) {
      console.error('Error uploading book:', error);
      setUploading(false);
    }

    // const handleFileChange = (file) => {
    //   setCoverImage(file);
    // };
  };

  const handleAuthorImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setCoverImageAuthor(file);
    setNameImageAuthor(file);
  };

  const handleBookImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setCoverImageBook(event.target.files[0]);
    setNameImageBook(file);
  };

  return (
    <>
      <div
        className="add-book-contianer grid
      "
      >
        <div className="header">
          <h1>Add Book</h1>
        </div>
        <div className="hero-layout column-12 flex">
          <form
            className="book-form column-12"
            onSubmit={handleSubmit}
            enctype="multipart/form-data"
          >
            <div className="row flex">
              {' '}
              <div className="form-group column-6">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group  column-6">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row flex">
              <div className="form-group  column-6">
                <label htmlFor="pageCount">Sayfa Sayısı:</label>
                <input
                  type="text"
                  id="pageCount"
                  value={pageCount}
                  onInput={(e) => setPageCount(e.target.value)}
                  required
                />
              </div>
              <div className="form-group column-6">
                <label htmlFor="lang-select">Dil:</label>
                <select
                  id="lang-select"
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="">Dil Seç</option>
                  <option value="English">English</option>
                  <option value="Türkçe">Türkçe</option>
                  <option value="Arabça">Arabça</option>
                  {/* قم بإضافة المزيد من الخيارات حسب الاحتياج */}
                </select>
              </div>
            </div>

            <div className="row flex">
              <div className="form-group  column-6">
                {/* <label htmlFor="book-image">Book Image:</label> */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBookImageChange}
                  style={{ display: 'none' }} // تخفي الزر الأصلي
                  id="book-image-input"
                />
                <label
                  htmlFor="book-image-input"
                  className="image-upload-button"
                >
                  {NameImageBook ? NameImageBook.name : 'Book Image'}
                </label>
              </div>
              <div className="form-group  column-6">
                {/* <label htmlFor="author-image">Author Image:</label> */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAuthorImageChange}
                  style={{ display: 'none' }} // تخفي الزر الأصلي
                  id="author-image-input"
                />

                <label
                  htmlFor="author-image-input"
                  className="image-upload-button"
                >
                  {NameImageAuthor ? NameImageAuthor.name : 'Author Image'}
                </label>
              </div>
            </div>
            <div className="row flex">
              {' '}
              <div className="form-group column-6">
                <label htmlFor="category-select">Category:</label>
                <select
                  id="category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="">Kategori seçme</option>
                  <option value="Tarıh">Tarih</option>
                  <option value="Bilim">Bilim</option>
                  <option value="İslam Dini">İslam Dini</option>
                  <option value="Tarih">Tarih</option>
                  <option value="Kültür">Kültür</option>
                  <option value="Piskoloj">Piskoloj</option>
                  <option value="Kitaplar romanlar ve edebi hikayeler">
                    Kitaplar romanlar ve edebi hikayeler
                  </option>
                  <option value="Arap edebiyatı">Arap edebiyatı</option>
                  <option value="Arapça dili">Arapça dili</option>
                  <option value="İslam felsefesi">İslam felsefesi</option>
                  <option value="Mühendislik                                                                                                                                                              Inglizce edebiyatı                                                                                                                                                                                       Çocuk">
                    Mühendislik Inglizce edebiyatı Çocuk
                  </option>
                  {/* قم بإضافة المزيد من الخيارات حسب الاحتياج */}
                </select>
              </div>
              <div className="form-group column-6">
                <label htmlFor="level-select">Level:</label>
                <select
                  id="level-select"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                  className="custom-select"
                >
                  <option value="">Seviye Seç</option>
                  <option value="ileri">ileri</option>
                  <option value="orta">orta</option>
                  <option value="temel">temel</option>
                  {/* قم بإضافة المزيد من الخيارات حسب الاحتياج */}
                </select>
              </div>
            </div>

            <div className="form-group column-12">
              {' '}
              <label htmlFor="desc">Description:</label>
              <textarea
                rows={5}
                id="desc"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group column-12">
              <label htmlFor="content-textarea">Content:</label>
              <textarea
                rows={15}
                id="content-textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="btn-con column-12 flex">
              <button
                type="submit"
                className="btn"
                disabled={uploading}
                onClick={handleSubmit}
              >
                {uploading ? 'Uploading...' : 'Add Book'}
              </button>
            </div>
          </form>
        </div>

        <BackTo path={'Anasayfa'} dir={'rtl'} />
      </div>
    </>
  );
};

export default AddBook;
