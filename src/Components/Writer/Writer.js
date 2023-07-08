import Card from '../Card/Card';
import Navbar from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import WriterImage from '../../Assets/images/iyad.webp'
import "./Writer.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
function Form() {

    const [data,setData] = useState([]);

    useEffect(() => {
        loadImages();
    },[]);
    const  loadImages = async()=>{
        const re = await axios.get('http://127.0.0.1:8000/api/getallwriter');
        setData(re.data);
        console.log(re.data);
    }

    return (
       <div className='writer-container'>
           <Navbar />
           <div className='writer-card-wraper'>
            
                {data.map((item)=>
                <>
                    <div>
                        <img src={`data:image/jpeg;base64,${item.content}`} alt="tazarin resmi" />
                    </div>
                    <div> 
                        <h3>{item.author}</h3>
                        <p>{item.desc}</p>
                    </div>
                </>
                )}
               
              
           
        </div>
        <h2>yazarin butun kitablari 325 kitab</h2>
        <div className='writer-book-wraper'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
        
        <div className='writer-footer'>
            <Footer />
        </div>

        
        
    </div>


    );
}
export default Form;