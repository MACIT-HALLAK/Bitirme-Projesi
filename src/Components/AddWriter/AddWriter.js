import React, { useState } from "react";
import "./AddWriter.css"
import BackTo from '../BackTo/BackTo';
import AppUrl from "../../AppUrl/AppUrl";
import RestApi from "../../AppUrl/RestApi";


function AddWriter() {

   function SendWriter(){
    let writer_name = document.getElementById("writer_name").value;
    let writer_disc = document.getElementById("writer_disc").value;
    let writer_img = document.getElementById("writer_img").value;

    let jesonObject={writer_name:writer_name,writer_disc:writer_disc,writer_img:writer_img}

    RestApi.PostRequest(AppUrl.AddWriter,JSON.stringify(jesonObject)).then(result=>{
      alert(result);
    }).catch(error=>{
      alert("Error");
    })
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
              <form className="book-form column-12" enctype="multipart/form-data" >
                <div className="row flex">
                  {' '}
                  <div className="form-group column-6">
                    <label htmlFor="title">Yazar Adi:</label>
                    <input
                      id="writer_name"
                      type="text"
                     // value={name}
                    //  onChange={(e)=>setName(e.target.value)}
                      required
                    />
                  </div>
                  
                </div>
    
        
                
                <div className="form-group column-12">
                  <label htmlFor="content-textarea">Yazar Hakkinda:</label>
                  <textarea
                    id="writer_disc"
                    rows={15}
                    //value={comment}
                   // onChange={(e)=>setComment(e.target.value)}
                    required
                  ></textarea>
                </div>
    
                <div className="row flex">
                  
                  <div className="form-group  column-6">
                    <label htmlFor="Writer-image">Yazar Resmi:</label>
                    <input type="file"
                    id="writer_img"
                     name="image"
                      />
                   
                  </div>
                </div>
                
                <div className="btn-con column-12 flex">
                    <button  className="btn" onClick={SendWriter}> Kaydet</button>
    
                </div>
              </form>
            </div>
    
            <BackTo path={'Anasayfa'} dir={'rtl'} />
          </div>
        </>
      );
    };
export default AddWriter;
