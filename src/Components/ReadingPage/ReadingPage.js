import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navber'
import book_img from "../../Assets/images/si1.webp";
import './ReadingPage.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ReadingPage = () => {
  return (
    <div className='reading-container'>
        <Navbar />
       <section>
        <p>
        I have found that it is best to deal with the meaning of the verb that is salient in the text. If the meaning of the verb in focus is to 'reject', 
        then I teach this meaning, without going into the other possible meanings. I find this approach to be clearer and less confusing for students.
        Richards states that "Knowing a word means knowing its different meanings (polysemy)." This is certainly our aim in teaching, but we must realise that 
        such competence requires time.
        It is only through reading, exposing learners to texts rich in multi-word verbs, that learners will become lexically competent. "The learner must be allowed 
        I have found that it is best to deal with the meaning of the verb that is salient in the text. If the meaning of the verb in focus is to 'reject', 
        then I teach this meaning, without going into the other possible meanings. I find this approach to be clearer and less confusing for students.
        Richards states that "Knowing a word means knowing its different meanings (polysemy)." This is certainly our aim in teaching, but we must realise that 
        such competence requires time.
        such competence requires time.
        such competence requires time.
        such competence requires time.
        such competence requires time.
        It is only through reading, exposing learners to texts rich in multi-word verbs, that learners will become lexically competent. "The learner must be allowed 
        to be vague about meaning at first; precision will come later". (Judd, quoted in Carter and McCarthy)
        to be vague about meaning at first; precision will come later". (Judd, quoted in Carter and McCarthy)
        <span>5</span>
        </p>
        <div>
        <button><FaArrowLeft /></button>
        <button><FaArrowRight/></button>
        </div>
       </section>
       <aside>
        <div>
        <h2>kitabin bilgileri</h2>

        </div>

            <div>
            <div>
            <p>yazar: iyad al qinabi </p>
                <p>bolum: din </p>
                <p>dil: arpca </p>
                <p>kac sayfa: 232 </p>
                <p>yayin tarihi: 20/5/2014 </p>
                </div>             
                <img src={book_img} alt="" />

                
            </div>
           
       </aside>

       <Footer />
    </div>
  )
}

export default ReadingPage