import React from 'react';
import './Card.css'

const Card = (props) => {
    
    const { headerLeft, headerRight, children } = props;
    return (
        <div className='card'
            {...props}>
            <div className="cardHeader">
                {headerLeft && <div>{headerLeft}</div>}
                {headerRight && <div>{headerRight}</div>}
            </div>
            {children}
        </div>
    );
};

export default Card;