import suar from '../../Assets/images/iyad.webp'
import "./Writer.css"
function Form() {
    return (
        <div className='general'>
                <div className='anaform'>
                    <div className='imgg'>
                        <img
                            src={suar}
                            width={50}
                            height={50} 
                        />
                    </div>
                       
                            <div className='text' >
                                <h3>Yazar Adi :</h3>                
                            </div>
                                         
                     
                            <div className='textt'>
                                <p> akkash akkkash </p>
                            </div> 
                                                                                  
                </div >     
                <div className='texttt'> <spam>Yazar Açıklaması :</spam></div>
                <div className='textttt'> Yazarın bütün kitaplar(468) </div>
        </div>
        


    );
}
export default Form;