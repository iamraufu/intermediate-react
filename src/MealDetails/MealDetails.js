import React, { useEffect, useState } from 'react';

const MealDetails = () => {
      const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
      const [meal,setMeal] = useState([])
      useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setMeal(data.meals[0]))
            //eslint-disable-next-line
      },[])
      const {strMeal,strCategory,strArea,strInstructions,strMealThumb,strTags,strYoutube,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9} = meal
      return (
            <div>
                  <h1>{strMeal}</h1>
                  <h2>Type: {strCategory}</h2>
                  <h3>Area: {strArea}</h3>
                  <h5>Ingredient:</h5>
                  <li>{strIngredient1} - {strMeasure1}</li>
                  <li>{strIngredient2} - {strMeasure2}</li>
                  <li>{strIngredient3} - {strMeasure3}</li>
                  <li>{strIngredient4} - {strMeasure4}</li>
                  <li>{strIngredient5} - {strMeasure5}</li>
                  <li>{strIngredient6} - {strMeasure6}</li>
                  <li>{strIngredient7} - {strMeasure7}</li>
                  <li>{strIngredient8} - {strMeasure8}</li>
                  <li>{strIngredient9} - {strMeasure9}</li>
                  <p style={{'textAlign':'justify'}}><u>How to Made:</u> {strInstructions}</p>
                  <img src={strMealThumb} alt=""/>
                  <p>{strTags}</p>
                  <a href={strYoutube} alt=''>Watch Recipe</a>
            </div>
      );
};

export default MealDetails;