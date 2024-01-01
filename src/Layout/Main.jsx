import React from 'react';
import Header from '../components/Header/Header';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import Footer from '../components/Footer/Footers';

const Main = (props) => {
    return (
        <div>
            <Header />
            <MenuHeader />
            {props.children}
            <Footer />
        </div>
    );
};

export default Main;