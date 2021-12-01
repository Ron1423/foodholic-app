import React from 'react';
import {Link} from 'react-router-dom';

const SimilarItems = (props) => {
    const imageUrl = `https://spoonacular.com/recipeImages/${props.similar.id}-312x231.${props.similar.imageType}`;
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={imageUrl} alt={props.similar.title} />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.similar.title}</h5>
                        <div className="d-flex justify-content-center small mb-2" style={{color:'saddleBrown'}}>
                            Food'aHolic
                        </div>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={`/details/${props.similar.id}`} target="_parent">View Details</Link></div>
                </div>
            </div>
        </div>
    );
}

export default SimilarItems;