import React, { Component } from 'react';
import '../Common/Title-section.css'
import arrow from '../Assets/Icons/Arrow.svg'
import { Link } from "react-router-dom";

const Title = ({ t1, t2, linkText, linkTo }) => {
    return ( 
        <>
            <div className='center-title'>
                <h1 className='header-title'>{t1}</h1>
                <h1 className='header-title2'>{t2}</h1>

                <div className='arrow'>
                      <Link to={linkTo} className="view-more">
                {linkText}
                      </Link>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </> 
    );
}
 
export default Title;