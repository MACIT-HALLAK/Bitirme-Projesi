import React, { useState } from 'react';
import './BookPage.css'
import Navbar from "../Navbar/Navber"
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

    
    
const BookPage = () => {

    const [cardCount, setCardCount] = useState(10);
    const [minCardCount, setMinCardCount] = useState(10);

    const Card_Adedi_Artırmak = () => {
        setCardCount(cardCount + 10);
    };

    const Card_Adedi_Azaltmak = () => {
        if (cardCount - 10 < minCardCount) {
            setCardCount(minCardCount);
        } else {
            setCardCount(cardCount - 10);
        }
    };

    const cards = [];
    for (let i = 0; i < cardCount; i++) {
        cards.push(<Card key={i} />);
    }

    return (
    
    <div className='book-page-container'>
        <div className='BookPage-Header'>
            <Navbar/>
        </div>
        <div className='BookPage-Body'>
            {cards}
        </div>
        
        <div className='btn-btn'>
            <button 
                type="submit" 
                className="BookPage-button-Artırma" 
                onClick={ Card_Adedi_Artırmak}>Daha Fazla Göster
            </button>
            
            <button 
                type="submit" 
                className="BookPage-button-Azaltma" 
                onClick={ Card_Adedi_Azaltmak}>Daha Az Göster
            </button>
        </div>
        
        <div className='BookPage-Footer'>
            <Footer/>
        </div>  
    </div>
    
    )
}

export default BookPage