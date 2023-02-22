import { Stack, Box, Button, Typography, FormControl, InputLabel, Select } from '@mui/material';

import React from 'react'
import { useEffect, useState } from 'react';
import { fetchFromApi } from '../utils/fetchFromAPI';
import InputIngredients from './InputIngredients';
import  {mockData}  from '../mockData';
import Recipe from './Recipe';
import Hero from './Hero';
import Loader from './Loader';
const Feed = () => {
    const [recipes, setRecipes] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
       
  setRecipes(mockData);
    }, [recipes]);
  

    const handleFindRecipe = () => {
        // fetchFromApi(ingredients)
        //     .then(data => setRecipes(data));
    }
    return (
        <Stack  width="100%" display="flex"  margin="auto" justifyContent="center" alignItems="center">
            <Hero  ingredients={ingredients} handleFindRecipe={handleFindRecipe} setIngredients={setIngredients}/>
             <Stack  sx={{padding:"2rem 3rem"}} direction="row" display="flex"  gap="30px" justifyContent="center" alignItems="center" flexWrap="wrap">
            
              { recipes.length>0 ? recipes.map((recipe) => {
                return <Recipe key={recipe.id} recipe={recipe} />
              }) : <Loader />}
             </Stack>
               
        </Stack>

    )
}

export default Feed