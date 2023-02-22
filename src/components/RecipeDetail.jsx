import React, { useEffect, useState } from 'react'
import { Stack, Box, Button, Typography, FormControl, InputLabel, Select } from '@mui/material';
import { fetchRecipeFromApi, fetchVideos } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import { mockRecipeDetail } from '../mockData';
import { removeHTMLTags } from '../utils/utils';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Loader from './Loader';

import HorizontalScroll from './HorizontalScroll';
const RecipeDetail = ({ recipe }) => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const { title, analyzedInstructions, preparationMinutes, cookingMinutes, image, summary, extendedIngredients, instructions, dishTypes, cuisines, servings } = recipeDetail ? recipeDetail : {};
  const getRecipeData = async (id) => {
    try {
      const recipeData = await fetchRecipeFromApi(id);
      setRecipeDetail(recipeData);
    } catch (error) {
      console.error(error);
    }
  };
  const getVideosRecipe = async (name) => {
    try {
      const videosData = await fetchVideos(name);
      setVideos(videosData);
    } catch (error) {
      console.error(error);
    }
  };
  const handleReadMore = () => {
    setReadMore(!readMore);
  }
  useEffect(() => {
    getRecipeData(id);
    // console.log(recipeDetail)
   // setRecipeDetail(mockRecipeDetail);
  }, [id]);
  useEffect(() => {
    getVideosRecipe(recipeDetail.title)
  }, [recipeDetail]);
  
 
  
 
  return (
   <Box>
    {recipeDetail.length ===0 ? <Loader /> : 
    <Box sx={{ margin: "1rem auto" }} width="80%">
       <Stack direction="row">
        <Stack width="60%" sx={{ boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "60% 40% 65% 35% / 32% 63% 37% 68% ", margin: "1rem 1rem", backgroundColor: "#ebfaa2", padding: "6rem 6rem" }} >
          <Typography sx={{ fontSize: "30px", textAlign: "center", padding: "1rem 1rem", margin: "1rem 0 ", fontWeight: "bold", color: "#a31621" }}>{title}</Typography>
          <img object-fit="contain" width="250px" height="250px" src={image} style={{ borderRadius: '20px' }} />
          <Typography onClick={handleReadMore}
            sx={{ fontSize: "14px", margin: "1rem 0 0 0", padding: "10px 30px" }}>{
              readMore ? removeHTMLTags(summary)
                : removeHTMLTags(summary).substring(0, 400) + "...(click to read more)"
            }
          </Typography>
        </Stack>

        <Box>
          <Stack sx={{
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)",
            borderRadius: "49% 51% 40% 60% / 67% 40% 60% 33% ", width: "40%", margin: "1rem 3rem", background: "#ebfaa2", padding: "3rem 7rem"
          }}>
            <Stack sx={{ padding: "1rem 0 0 0 " }} direction="row">
              <Typography sx={{ color: "#a31621", fontWeight: "bold" }}>Prep time:&nbsp;&nbsp;</Typography>
              <Typography color="black" sx={{ fontSize: "18px", textAlign: "center", fontWeight: "bold" }} >{preparationMinutes}</Typography>
              <Typography sx={{ color: "#a31621" }}> &nbsp;&nbsp;minutes</Typography>
            </Stack>

            <Stack sx={{ padding: "1rem 0 0 0 " }} direction="row">
              <Typography sx={{ color: "#a31621", fontWeight: "bold" }}>Cooking time:&nbsp;&nbsp;</Typography>
              <Typography color="black" sx={{ fontSize: "18px", fontWeight: "bold" }} >{cookingMinutes}</Typography>
              <Typography sx={{ color: "#a31621" }}> &nbsp;&nbsp;minutes</Typography>
            </Stack>

            <Stack sx={{ padding: "1rem 0 0 0 " }} direction="row">
              <Typography sx={{ color: "#a31621", fontWeight: "bold" }}>Servings:&nbsp;&nbsp;</Typography>
              <Typography color="black" sx={{ fontSize: "18px", fontWeight: "bold" }} >{servings}</Typography>

            </Stack>
          </Stack>
          <Stack sx={{
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)",
            borderRadius: "67% 33% 64% 36% / 46% 74% 26% 54%  ", width: "60%", margin: "1rem 3rem",
            background: "#ebfaa2", padding: "3rem 7rem", display: "flex", justifyContent: "space-around"
          }}>
            <Typography sx={{ padding: "10px  ", fontSize: "20px", fontWeight: "bold", color: "#a31621" }}>Ingredients: </Typography>
            <Typography >{
              extendedIngredients && extendedIngredients.map((ingredient, number) => {
                return (<Typography key={number} sx={{ padding: "10px 0 0 0 ", fontSize: "15px" }}><FiberManualRecordIcon sx={{ color: "#a31621", fontSize: "small" }} /> {ingredient.original}</Typography>)
              })
            } </Typography>
          </Stack>
        </Box>

      </Stack>
      <Stack sx={{
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.27)",
        borderRadius: "67% 33% 64% 36% / 46% 74% 26% 54%  ", width: "80%", margin: "1rem 3rem",
        background: "#ebfaa2", padding: "8rem", display: "flex", justifyContent: "space-around"
      }}>
        <Typography sx={{ padding: "10px  ", fontSize: "20px", fontWeight: "bold", color: "#a31621" }}>Instructions: </Typography>
        {analyzedInstructions && instructions && analyzedInstructions[0].steps?.map((step, number) => {
          return (<Typography key={number} sx={{ fontSize: "15px" }}>{step.number}. {step.step}</Typography>)
        })}
      </Stack>
      <Stack >
        <Typography sx={{ padding: "10px  ", fontSize: "20px", fontWeight: "bold", color: "#a31621" }}>Check out youtube tutorials related to {recipeDetail.title} </Typography>
       {videos.length ===0 ? <Loader/> : <HorizontalScroll videos={videos}/>} 
      </Stack>
      </Box>
}
    </Box>
    
  )
}

export default RecipeDetail