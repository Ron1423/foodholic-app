import React from 'react';
import {Link} from 'react-router-dom';

const FoodItems = (props) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={props.food.image} alt={props.food.title} />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.food.title}</h5>
                        <div className="d-flex justify-content-center small mb-2" style={{color:'saddleBrown'}}>
                            Food'aHolic
                        </div>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/details/${props.food.id}`}>View Details</Link></div>
                </div>
            </div>
        </div>
    );
}

export default FoodItems;