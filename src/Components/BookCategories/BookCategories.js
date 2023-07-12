import React, { Component } from 'react';
import './BookCategories.css';
import {FaBook} from "react-icons/fa"
import RestApi from '../../AppUrl/RestApi';
import AppUrl from '../../AppUrl/AppUrl';

class BookCategories extends Component {
  constructor(){
      super();
      this.state={
          data:[]
      }
  }

  componentDidMount(){
      RestApi.GetRequest(AppUrl.Categories).then(result => {
          this.setState({ data: result });
      });
  }

  render(){
      const List = this.state.data;
      const View = List.map(categories => (
        <a href={`/categories/${categories.categorie}`}><div className='' key={categories.id}>
              <p className='cat-p'>{categories.categorie} <FaBook size={25} className='book-icon' /></p>
          </div></a>
      ));
  return (
    <aside className='chapters-wraper'>
        <h2>Kitab Bölümleri</h2>
       {View}
         
        
    </aside>  
    )
}
}

export default BookCategories