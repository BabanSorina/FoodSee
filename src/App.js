import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Feed, NavBar, RecipeDetail } from './components'
import { Box } from '@mui/material'
function App() {

  const font = "'Source Sans Pro', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: font
    },
    palette: {
      primary: {
        main: "#EF959D"
      }
    }
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box >
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route path='/recipe/:id' element={<RecipeDetail />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

