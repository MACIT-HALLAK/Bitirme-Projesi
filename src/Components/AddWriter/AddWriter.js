import React, { useState } from "react";
import "./AddWriter.css"
import BackTo from '../BackTo/BackTo';
import AppUrl from "../../AppUrl/AppUrl";
import RestApi from "../../AppUrl/RestApi";
import CustomFileInput from '../AddBooks/CustomFileInput';
import axios from "axios";

function AddWriter() {

  const [author, setAuthor] = useState('');
  const [desc, setdesc] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);

      console.log(coverImage);
      // Make POST request using Axios
      const formData = new FormData();
    
      formData.append('author', author);
      formData.append('desc', desc);
      formData.append('img', coverImage);
      formData.forEach((e) => {
        console.log(e);
      });

      // Make POST request to upload image using Axios
      const response = await axios.post('https://librarygop.com/public/index.php/api/addwriter', formData);

      // Reset form after successful upload
      
      setAuthor('');
      setdesc('');
      setCoverImage(null);
      setUploading(false);
      setUploaded(true);
     
    } catch (error) {
      console.error('Error uploading book:', error);
      setUploading(false);
    }
  }
  
    
    return (
        <>
          <div
            className="add-Writer-contianer grid"
          >
            <div className="header">
              <h1>Yazar Ekle</h1>
            </div>
            <div className="hero-layout column-12 flex">
              <form className="book-form column-12" enctype="multipart/form-data" onSubmit={handleSubmit}>
                <div className="row flex">
                  {' '}
                  <div className="form-group column-6">
                    <label htmlFor="title">Yazar Adi:</label>
                    <input
                      id="writer_name"
                      type="text"
                      value={author}
                      onChange={(e)=>setAuthor(e.target.value)}
                      required
                    />
                  </div>
                  
                </div>
    
        
                
                <div className="form-group column-12">
                  <label htmlFor="content-textarea">Yazar Hakkinda:</label>
                  <textarea
                    id="writer_disc"
                    rows={15}
                    value={desc}
                    onChange={(e)=>setdesc(e.target.value)}
                    required
                  ></textarea>
                </div>
    
                <div className="row flex">
                  
                  <div className="form-group  column-6">
                    <label htmlFor="Writer-image">Yazar Resmi:</label>
                    <CustomFileInput
                      onFileSelect={setCoverImage}
                      uploaded={uploaded}
                   />                   
                  </div>
                </div>
                
                <div className="btn-con column-12 flex">
                    <button  className="btn" type="submit" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Add writer'}
                    </button>
    
                </div>
              </form>
            </div>
    
            <BackTo path={'Anasayfa'} dir={'rtl'} />
          </div>
        </>
      );
    };
export default AddWriter;
