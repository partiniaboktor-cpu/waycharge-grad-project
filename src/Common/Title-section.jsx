import React, { Component } from 'react';
import '../Common/Title-section.css'
import arrow from '../Assets/Icons/Arrow.svg'

const Title = (props) => {
    return ( 
        <>
            <div className='center-title'>
                <h1 className='header-title'>{props.t1}</h1>
                <h1 className='header-title2'>{props.t2}</h1>

                <div className='arrow'>
                    <p className='view-more'>{props.linkText}</p>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </> 
    );
}
 
export default Title;