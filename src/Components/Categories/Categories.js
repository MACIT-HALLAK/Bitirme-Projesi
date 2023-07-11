import React, { Component } from 'react';
import './Categories.css';
//import { useCookies } from 'react-cookie';
import Navbar from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import { FaBook } from "react-icons/fa";
import RestApi from '../../AppUrl/RestApi';
import AppUrl from '../../AppUrl/AppUrl';

class Categories extends Component {
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
           <a href={`/categories/${categories.categorie}`}> <div className='cat-d' key={categories.id}>
                <p className='cat-p'>{categories.categorie} <FaBook size={25} className='cat-icon' /></p>
            </div></a>
        ));

        return (
            <>
            <div className='nav-1'>
                <Navbar />
            </div>
        
            <div className='categories'>
               {View}
            </div>
            
            <Footer />
            </>
        );
    }
}

export default Categories;
