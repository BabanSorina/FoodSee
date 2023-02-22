import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Cancel } from '@mui/icons-material'
const Ingredient = ({ingredient, handleDelete}) => {

    return (
        <Box sx={{
            background: "#A31621",
            height: "100%",
            display: "flex",
            padding: "0.4rem",
            margin: "0 0.5rem 0 0",
            justifyContent: "center",
            alignContent: "center",
            color: "#ffffff",
          }}>
            <Stack direction="row" gap={1}>
                <Typography >{ingredient}</Typography>
                <Cancel  onClick={()=>handleDelete(ingredient)} sx={{ cursor: "pointer" }} />
            </Stack>
        </Box>
    )
}

export default Ingredient