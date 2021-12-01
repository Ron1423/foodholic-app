import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import FoodDetails from '../components/fooddetails'

const Details = () => {
    const [food,setFoods] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${params.foodId}/information?includeNutrition=false&apiKey=f20536e2a9f8460ba2ac66356e6fa945`)
        .then(response => response.json())
        .then(data => setFoods(data));

        //eslint-disable-next-line
    }, []);
    return(
        <div className="container">
            <Header/>
            <Navigation/>
            <FoodDetails food={food}/>
            <Footer/>
        </div>
    );
}

export default Details;