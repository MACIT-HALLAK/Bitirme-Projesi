import React from 'react'//rfce
import './WordsPage.css';
import Title from '../Title/Title';
import { FaRegTrashAlt } from "react-icons/fa";

function WordsPage() {
  return (
    <div className='word-page-parent'>
        <Title title="Reader At Work 2" />
        <div className='word-page-wraper'>
            <div className='word-page-child'>
                <p>attractiveness</p>
                <p>جاذبية</p>
                <button><FaRegTrashAlt /></button>
                
            </div>
            <div className='word-page-child'>
                <p>wishes</p>
                <p>التمنيات</p>
                <button><FaRegTrashAlt /></button>
                
            </div>
            <div className='word-page-child'>
                <p>wishes</p>
                <p>التمنيات</p>
                <button><FaRegTrashAlt /></button>
                
            </div>
            <div className='word-page-child'>
                <p>wishes</p>
                <p>التمنيات</p>
                <button><FaRegTrashAlt /></button>
                
            </div>
            <div className='word-page-child'>
                <p>wishes</p>
                <p>التمنيات</p>
                <button><FaRegTrashAlt /></button>
                
            </div>
            <div className='word-page-child'>
                <p>wishes</p>
                <p>التمنيات</p>
                <button><FaRegTrashAlt /></button>
                
            </div>
        </div>
    </div>
  )
}

export default WordsPage