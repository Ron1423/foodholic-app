import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/similaritems';


const FoodDetails = (props) => {
    const [similar,setSimilar] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${params.foodId}/similar?apiKey=f20536e2a9f8460ba2ac66356e6fa945`)
        .then(response => response.json())
        .then(data => setSimilar(data));

        //eslint-disable-next-line
    }, []);
    return(
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={props.food.image} alt={props.food.name} /></div>
                        <div className="col-md-6">
                            <div className="small mb-1" style={{color:'white'}}>Credits : {props.food.creditsText}</div>
                            <h1 className="display-5 fw-bolder" style={{color:'orange'}}>{props.food.title}</h1>
                            <div className="fs-5 mb-5">
                                <span>Ready to serve in {props.food.readyInMinutes} minutes.</span>
                            </div>
                            <div className="d-flex">
                                <a className="btn btn-outline-dark flex-shrink-0" href={parse(`${props.food.sourceUrl}`)} target="_blank" rel="noopener noreferrer">
                                   See Recepies
                                </a>
                            </div>
                            <p className="lead" style={{color:'wheat'}}>{parse(`${props.food.summary}`)}</p>
                            <div className="d-flex">
                                <Link className="btn btn-outline-dark flex-shrink-0" to="/home">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4" style={{color:'orange'}}>Related products</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {similar.map((similar)=> <SimilarItems key={similar.id} similar={similar} />) }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FoodDetails;