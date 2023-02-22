import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Recipe = ({ recipe }) => {

    return (
        <Link style={{ textDecoration: 'none' }}  to={`/recipe/${recipe.id}`}>
        <Box width="400px" height="500px" >
            <Card sx={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)",borderRadius:"5%", borderColor:"gray"}}>
                <CardMedia> <img width="100%" height="200px" src={recipe.image} /></CardMedia>
                <CardContent>
                    <Typography variant="h5" sx={{ margin: "1rem 0 0 0" }}>{recipe.title}</Typography>
                    <Typography variant="h6" sx={{ margin: "1rem 0 0 0" , textAlign:"center"}}> You have <b> {recipe.usedIngredientCount}</b> ingredients from the {recipe.usedIngredientCount + recipe.missedIngredientCount} needed </Typography>
                </CardContent>
                <CardActions width="100%">
                    <Button   variant="contained" sx={{margin:" 10px auto",width: "200px",alignSelf:"center", color:"black",backgroundColor:"#ebfaa2", fontSize:"15px", borderRadius:"71% 29% 66% 34% / 31% 75% 25% 69% "}}>
                        Check recipe
                    </Button>
                </CardActions>
            </Card>
        </Box>
        </Link>
        
    )
}

export default Recipe