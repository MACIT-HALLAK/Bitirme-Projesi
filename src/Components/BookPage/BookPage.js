import { useState,useEffect } from 'react';
import './BookPage.css'
import Navbar from "../Navbar/Navber"
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import axios from 'axios'

    
    
const BookPage = () => {

    const [cardCount, setCardCount] = useState(10);
    const [minCardCount, setMinCardCount] = useState(10);
    const [data,setData] = useState([]);


    useEffect(() => {
        loadImages();
    },[]);
    const  loadImages = async()=>{
        const re = await axios.get('https://librarygop.com/public/index.php/api/getallbooks');
        setData(re.data);
        console.log(re.data);
    }

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
        cards.push(<Card key={i}  />);
    }

    return (
    
    <>
        <div className='BookPage-Header'>
            <Navbar/>
        </div>
        <div className='BookPage-Body'>
            {data.map((items)=>
            <>
            <Card key={items.id} bookImage={`data:image/jpeg;base64,${items.conten}`} name={items.title} WriterName={items.author}  />
            
            </>

            )}
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
    </>
    
    )
}

export default BookPage