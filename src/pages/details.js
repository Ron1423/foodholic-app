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
        fetch(`https://api.spoonacular.com/recipes/${params.foodId}/information?includeNutrition=false&apiKey=e066a6ece4ff4f55bf056f428764dff8`)
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