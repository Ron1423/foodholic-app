import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Food from '../components/food';

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <Food/>
            <Footer/>
        </div>
    );
}

export default Home;