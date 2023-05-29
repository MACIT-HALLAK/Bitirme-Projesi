import React, { useState } from 'react';
import './AddBook.css';
import CustomFileInput from './CustomFileInput';
import axios from 'axios';
import BackTo from '../BackTo/BackTo';
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setdesc] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);

      console.log(coverImage);
      // Make POST request using Axios
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('desc', desc);
      formData.append('coverImage', coverImage);
      formData.append('author', author);
      formData.append('desc', desc);
      formData.append('category', category);
      formData.append('level', level);
      formData.append('content', content);
      formData.forEach((e) => {
        console.log(e);
      });

      // Make POST request to upload image using Axios
      const response = await axios.post('/api/books', formData);

      // Reset form after successful upload
      setTitle('');
      setAuthor('');
      setdesc('');
      setCoverImage(null);
      setUploading(false);
      setUploaded(true);
      setCategory('');
      setLevel('');
      setContent('');
    } catch (error) {
      console.error('Error uploading book:', error);
      setUploading(false);
    }

    const handleFileChange = (file) => {
      setCoverImage(file);
    };
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
          <form className="book-form column-12" onSubmit={handleSubmit}>
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
                <label htmlFor="desc">Description:</label>
                <input
                  type="text"
                  id="desc"
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                  required
                />
              </div>
              <div className="form-group  column-6">
                <label htmlFor="book-image">Image:</label>
                <CustomFileInput
                  onFileSelect={setCoverImage}
                  uploaded={uploaded}
                />
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
                  <option value="tarıh">Tarih</option>
                  <option value="bilim">Bilim</option>
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
              <button type="submit" className="btn" disabled={uploading}>
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
