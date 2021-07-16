import React from 'react'
import { useEffect, useState } from 'react'
import '../../App.css'
import { useParams } from "react-router-dom";

export default function GamesSingle() {
    const [review, setReviews] = useState([])
    let { review_id } = useParams();

    useEffect(() => {
        fetch(`https://ncgamesja.herokuapp.com/api/reviews/${review_id}`)
        .then(res => res.json())
        .then((reviewsFromApi) => {
            setReviews(reviewsFromApi.review);
        })
    }, []);
console.log(review)
    return <h1 classname='review'>
    <ul>
 <p>          
     {review.review_body}
 </p>
 <p>{review.owner}</p>
    </ul>
    
    </h1>
}