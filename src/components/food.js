import React, { useState, useEffect } from 'react';
import FoodItems from '../components/fooditem';

const Food = () => {
    const [food,setFood] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=e066a6ece4ff4f55bf056f428764dff8')
        .then(response => response.json())
        .then(data => setFood(data.results));

        //eslint-disable-next-line
    }, []);

    const handleChange = e => setText(e.target.value);
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${text}&number=&apiKey=e066a6ece4ff4f55bf056f428764dff8`)
        .then(response => response.json())
        .then(data => setFood(data.results));
        
        setText('');
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="input-group mb-3" >
                    <input type="text" className="form-control" placeholder="Find your meal..." aria-label="Find your meal.." aria-describedby="button-addon2" onChange={handleChange} value={text}/>
                    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleClick}>Search</button>
                </div>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {food.map((food)=> <FoodItems key={food.id} food={food} />) }
                </div>
            </div>
        </section>
    );
}

export default Food;