import React from 'react'//rafce
import './QuotePage.css'
import Title from '../Title/Title'
import { FaRegTrashAlt } from 'react-icons/fa'

const QuotePage = () => {
  return (
    <div className='quote-page-layout'>
        <Title title="Reader At Work 2" />
        <div className='quote-page-wraper'>
            <div className='quote-page-child'>
                <p>Bilgisayar muhendisligi bolun baskanligi</p>
                <button><FaRegTrashAlt /></button>
            </div>
            <div className='quote-page-child'>
                <p>Bilgisayar muhendisligi bolun baskanligi</p>
                <button><FaRegTrashAlt /></button>
            </div>
            <div className='quote-page-child'>
                <p>Bilgisayar muhendisligi bolun baskanligi</p>
                <button><FaRegTrashAlt /></button>
            </div>
        </div>
    </div>  
  )
}
export default QuotePage
