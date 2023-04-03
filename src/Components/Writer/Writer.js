import Card from '../Card/Card';
import Navbar from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import WriterImage from '../../Assets/images/iyad.webp'
import "./Writer.css"
function Form() {
    return (
       <div className='writer-container'>
           <Navbar />
           <div className='writer-card-wraper'>
            <div>
               <img src={WriterImage} alt="tazarin resmi" />
            </div>  
            <div> 
               <h3>iyad quneibi</h3>
               <p>Kütüphanede toplam (222.990) indirilmiş ve okunmuş (14) kitabı bulunmaktadır.
                    Kardeşin, İyad Abdel Hafız Quneibi
                    Profesör Doktor Eczacılıkta "Profesör".
                    Herhangi bir partiye, akıma veya partiye bağlı değilim ve sadece bölümlerim ve yazılarım beni temsil ediyor.
                    Kendimi Müslüman olduğumdan daha fazla tanıtmayı sevmiyorum ve hepsiyle hayırda işbirliği yapıyorum.
                    ABD, Houston Üniversitesi'nden farmakoloji alanında doktora derecem var ve bilimsel araştırmalarımı dünyanın en büyük tıbbi araştırma merkezlerinden biri olan Texas Medical Center'da yaptım.
                    Çeşitli terapötik alanlarda uluslararası dergilerde yayınlanmış, yüzlerce kez atıfta bulunulan onlarca bilimsel makalem var.
                </p>
            </div>
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
           <Footer />

       </div>


    );
}
export default Form;