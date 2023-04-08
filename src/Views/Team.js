import React from 'react';
import { Link } from "react-router-dom"

const Team = () => {
    return (
        <div className='teamDiv'>
            <div className='row teamRow'>
                <div className='col-2'>
                    <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680963236/images/Text_rdtlsw.png' alt='2 symbol' />
                </div>
                <div className='col-10'>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

        
        <div className='teamBody'>
             <nav>
                <ul className='teamList'>
                        <li className='li-1'>
                            <Link to="/" className="li-1" >MOUNTAIN 1</Link>
                             </li>
                        <li className='li-2'>
                        <Link to="/history" className="li-2" >MOUNTAIN 2</Link>
                        </li>
                    </ul>
                </nav>
            <div className='teamSchedule'>
                <div className='scheduleDiv'>
                <h1>SCHEDULE</h1>
                <div className='teamSpan row'>
                    <span className='col'>25 Nov 2016</span>
                    <span className='col'>Vestibulum viverra</span>
                </div>
                <div className='teamSpan row'>
                    <span className='col'>28 Nov 2016</span>
                    <span className='col'>Vestibulum viverra</span>
                </div>
                <div className='teamSpan row'>
                    <span className='col'>18 Dec 2016</span>
                    <span className='col'>Vestibulum viverra</span>
                </div>
                <div className='teamSpan row'>
                    <span className='col'>7 Jan 2017</span>
                    <span className='col'>Vestibulum viverra</span>
                </div>
                </div>
            </div>
        </div>
        <footer>
            <div className='row'>
                <div className='col footer-img'>
                <Link to="/">
                    <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680973937/images/Group_5_uwiice.png' alt='2 symbol' />
                    </Link>
                </div>
                <div className='col'>
                    <p>
                    COPYRIGHT 2016. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Team;