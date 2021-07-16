import React from 'react'
import { useEffect, useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';


export default function Games() {
const [games, setGames] = useState([]);

useEffect(() => {
    fetch('https://ncgamesja.herokuapp.com/api/reviews')
    .then(res => res.json())
    .then((gamesFromApi) => {
        setGames(gamesFromApi.reviews);
    })
}, []);
console.log(games);

    return <h1 classname='games'>
    <ul>
        {games.map(games => {
 return <li>
     <Link
     to={`/games/${games.review_id}`}> {games.title}
               </Link>
     {games.review_body}
 </li>
})}
    </ul>
    
    </h1>
}

