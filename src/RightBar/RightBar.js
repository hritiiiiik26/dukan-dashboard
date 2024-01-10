import React, { useState, useEffect } from 'react';
import './RightBar.css';
import help from '../images/Navbar/Help.svg';
import search from '../images/Navbar/search.svg';
import speaker from '../images/Navbar/speaker.svg';
import sort from '../images/Navbar/Sort.svg';
import menu from '../images/Navbar/Menu.svg';
import Info from '../images/Navbar/Info.svg'
import Triangle from '../images/Navbar/Triangle-Icon.svg'
import download from '../images/Navbar/download.svg';
import { STATS,TABLE_DATA } from '../utils/constants';

const MonthDropdown = () => {
  const [months, setMonths] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const lastMonth = (currentMonth - 1 + 12) % 12; // Handling the case when currentMonth is 0

    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    setMonths([
        { value: 'lastMonth', label: 'Last Month' },
        { value: monthNames[currentMonth], label: monthNames[currentMonth] },
        { value: monthNames[lastMonth], label: monthNames[lastMonth] },
      ]);
      setSelectedMonth('lastMonth');
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <select id="monthDropdown" value={selectedMonth} onChange={handleMonthChange}>
      {months.map((month, index) => (
          <option key={index} value={month.value}>{month.label}</option>
        ))}
      </select>
    </div>
  );
};

const RightBar = () => {
  return (
    <div className='right_container'>
      <div className='right-header'>
        <div className='h1'>
          <div className='payments'>Payments</div>
          <div className='h1-part'>
            <img src={help} alt=''/>
            <span style={{color:'#4D4D4D'}}>How it works</span>
          </div>
        </div>
        <div className='input-cont'> 
          <img src={search} alt='' />
          <input type="text" placeholder="Search features, tutorials, etc." />
        </div>
        <div className='rh-right'>
          <div className='circle'>
            <img src={speaker} alt='' style={{marginLeft:'9px'}} />
          </div>
          <div className='circle'>
            <img src={menu} alt='' />
          </div>
        </div>
      </div>

      <div className='overview'>
        <div className='ov-text'>Overview</div>
        <MonthDropdown />
      </div>

      <div className='stats'>
        {
            STATS.map((item)=>(
                <div className='stats-cont' key={item.number}>
                    <div className='stats-label'>{item.label}</div>
                    <div className='stats-number'>{item.number}</div>
                </div>
            ))
        }
      </div>

      <div className='overview'>
        <div className='ov-text'>Transactions | This Month</div>
      </div>

      <div className='table-cont'>
        <div className='table-cont-header'>
        <div className='input-cont-2'> 
          <img src={search} alt='' />
          <input id='input2' type="text" placeholder="Search by order ID..." />
        </div>
        <div className='sort-cont'>
            
                <div className='sort-div'>
                    <span>Sort</span>
                    <img src={sort} alt=''></img>
                </div>
               
                <div className='sort-div'>
                    <img src={download} alt=''></img>
                </div>
        </div>

        </div>

        <div className='labels-cont'>
            <span className='labels-span'>Order ID</span>
            <span className='labels-span'>Order date
            <img src={Triangle} alt=''></img></span>
            <span className='labels-span-1'>Order amount</span>
            <span className='labels-span-1'>Transaction Fees
            <img src={Info} alt=''></img></span>
        </div>

        {
            (TABLE_DATA).map((item)=>(
                <div className='value-cont'>
                    <div className='labels-span'>{item.order_id}</div>
                    <div className='labels-span'>
                        {item.order_date}
                        </div>
                    <div className='labels-span-1'>{item.order_amount}</div>
                    <div className='labels-span-1'>{item.fees}</div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default RightBar;
