import React from 'react'
import './leftbar.css';
import nav from '../images/Navbar/nishan.svg'
import arrow from '../images/Navbar/arrow_down.svg'
import wallet from '../images/Navbar/wallet.svg'
import { LEFT_OPTIONS } from '../utils/constants';

const LeftBar = () => {
  return (
    <div className='container'>
    <div className='header'>
    <img src={nav} alt='img' height='39px' width='39px' />
    <div className='heading-line'>
        <span className='item-type'>Nishyan</span>
        <span className='underline'>Visit store</span>
    </div>
    <div><img src={arrow} alt='img' /></div>
    </div>

    <div className='left-body'>
{LEFT_OPTIONS.map((item)=>(
    <div className='body-list-item' key={item.name}>
    <img src = {item.src} alt=''/>
    <div className='item-type'>{item.name}</div>
    </div>
))}
    </div>

    <div className='leftbar-bottom'>
       <img src={wallet} alt=''/>
       <div className='left-bottom-text'>
            <div className='lb-text-item1'>Available credits</div>
            <div className='lb-text-item2'>222.10</div>
       </div>
    </div>
    </div>
  )
}

export default LeftBar;