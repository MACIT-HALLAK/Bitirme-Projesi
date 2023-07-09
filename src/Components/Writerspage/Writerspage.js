import {useEffect,useState} from "react";
import "./Writerspage.css";
import Navbar from "../Navbar/Navber";
import CardWriters from "../CardWriters/CardWriters";
import axios from 'axios';
import Footer from "../Footer/Footer";
import { FaSearch } from "react-icons/fa";

const Writerspage = () => {

  const [data,setData] = useState([]);

    useEffect(() => {
        loadData();
    },[]);

    const  loadData = async()=>{
        const re = await axios.get('https://librarygop.com/public/index.php/api/getallwriter');
        setData(re.data);
    }

  return (
    <div className="Writerspage-layout">
      <Navbar />
      <div className="Writerspage-layout-arama">
        <h3>
          <span>
            <FaSearch />
          </span>
          <input type="text" placeholder="Bir Yazarın Ara"></input>
        </h3>
      </div>
      <div className="parent">
        {data ? data.map((item)=>
        <CardWriters WriterImage={`data:image/jpeg;base64,${item.content}`} writerName={item.author} />
        
        ):console.log("no data")}
        
      </div>
      <Footer />
    </div>
  );
};

export default Writerspage;
