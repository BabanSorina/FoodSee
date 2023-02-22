import React from 'react'
import { Stack, Box, Button, Typography, FormControl, InputLabel, Select } from '@mui/material';
import InputIngredients from './InputIngredients';
const Hero = ({ingredients,setIngredients,handleFindRecipe}) => {
    return (
        <Stack  margin=" 2rem auto" width="40%" sx={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)", padding: "2rem 6rem" ,backgroundColor:"#ebfaa2", borderRadius:"49% 51% 40% 60% / 67% 40% 60% 33%  "}} >
            <Typography  sx={{ fontSize:"40px",margin: "1rem 0 0 0",fontWeight:"bold" ,textAlign: "center" }}>Make It Work</Typography>
            <Typography  sx={{ fontSize:"20px",margin: "1rem 0 0 0", textAlign: "center" }}> Whip Up Delicious Meals with What You Have</Typography>

            <InputIngredients  ingredients={ingredients} setIngredients={setIngredients} />
            <Button variant="contained" sx={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)", width: "30%", alignSelf: "center", color: "white", backgroundColor: "#A31621", fontSize: "25px", borderRadius: "27% 73% 27% 73% /65% 35% 67% 33% " }} onClick={() => { handleFindRecipe() }}>Find recipe</Button>

        </Stack>
    )
}

export default Hero