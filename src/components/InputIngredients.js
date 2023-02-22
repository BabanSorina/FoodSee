import React, { useRef, useState } from 'react';
import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import Ingredient from './Ingredient';
const InputIngredients = ({ingredients,setIngredients}) => {
   
    const ingredientRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(ingredientRef.current.value != ""){
            setIngredients([...ingredients, ingredientRef.current.value]);
            ingredientRef.current.value = "";
        }
    }
 const handleDelete = (value) => {
    const newIngredients=ingredients.filter((ing) => ing !== value);
    setIngredients(newIngredients);
 }
    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                fullWidth
                variant='standard'
                size='small'
                sx={{ margin: "1rem 0" }}
                margin='none'
                textAlign="center"
                    placeholder={ingredients.length < 3 ? "Enter ingredients" : ""}
                    inputRef={ingredientRef}
                    InputProps={{ 
                        startAdornment: (
                            <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                               {
                                ingredients.map((ingredient, index) => {
                                    return <Ingredient  handleDelete={handleDelete}key={index} ingredient={ingredient} />
                                }
                                )}
                            </Box>
                        )
                    }}
                />


            </form>
        </Box>
    )
}

export default InputIngredients


