import React, { useEffect } from 'react'
import { ImageList, ImageListItem, Input, Stack, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/transparent.png';
import { fetchRandomRecipeFromApi } from '../utils/fetchFromAPI';
const NavBar = () => {

    const getRandomData = async () => {
        try {
            const recipeData = await fetchRandomRecipeFromApi();
           setRecipe(recipeData);
        } catch (error) {
            console.error(error);
        }
    };

    const [recipe, setRecipe] = React.useState({});
    useEffect(() => {
       getRandomData();

    }, [recipe]);
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{
            position: "sticky",zIndex:100, borderRadius:"10% 10% 32% 29% / 0% 0% 21% 22% ",
            background: '#ebfaa2', top: 0, justifyContent: 'space-around',
        }} >

            <Link  onClick={()=>{getRandomData()}}style={{ textDecoration: 'none' }} to={`/recipe/${recipe.id}`}><Box >
                <Typography sx={{ color: "#A31621", fontSize: "20px", padding: "0 10px", textAlign: "center" }}>Get </Typography>
                <Typography sx={{ color: "#A31621", fontSize: "25px", fontWeight: "bold", padding: "0 10px", textAlign: "center" }}>random</Typography>
                <Typography sx={{ color: "#A31621", fontSize: "20px", padding: "0 10px", textAlign: "center" }}>recipe</Typography>
            </Box>
            </Link>
            <Link to='/'> <img style={{ width: "150px", height: "100px" }} src={Logo} />
            </Link>
            <Link onClick={()=>{getRandomData()}} style={{ textDecoration: 'none' }} to={`/recipe/${recipe}`}>
                <Box>
                    <Typography sx={{ color: "#020024", fontSize: "20px", padding: "0 10px", textAlign: "center" }}>Search </Typography>
                    <Typography sx={{ color: "#020024", fontSize: "25px", fontWeight: "bold", padding: "0 10px", textAlign: "center" }}>recipe</Typography>
                    <Typography sx={{ color: "#020024", fontSize: "20px", padding: "0 10px", textAlign: "center" }}>using photo</Typography>
                </Box>
            </Link>
        </Stack>
    )
}

export default NavBar