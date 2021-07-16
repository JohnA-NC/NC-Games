import React from 'react'
import '../../App.css'
import { useEffect, useState } from 'react'

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://ncgamesja.herokuapp.com/api/categories')
        .then(res => res.json())
        .then((categoriesFromApi) => {
            setCategories(categoriesFromApi.categories);
        })
    }, []);
    console.log(categories);
    
        return <h1 classname='categories'>
        <ul>
            {categories.map(categories => {
     return <li>
         {categories.slug}
     </li>
    })}
        </ul>
        
        </h1>
    }
    