import React from 'react';
import Header from '../components/Header/Header';
import MenuHeader from '../components/MenuHeader/MenuHeader';

const Main = (props) => {
    return (
        <div>
            <Header />
            <MenuHeader />
            {props.children}
        </div>
    );
};

export default Main;