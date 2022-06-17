import {Box} from "@mui/material"
import HomeBanner from "./components/HomeBanner"
import Discription from "./components/Description"
import Products from "./components/Products"
import Testimonial from "./components/Testimonial"
import Mailing from "./components/Mailing"
import "./App.css"


function App() {
  return (
    <Box  width="800px" sx={{ width: {xl: "1488px"}}} m="auto">
       <HomeBanner />
       <Discription />
       <Products />
       <Testimonial />
       <Mailing />
    </Box>
  );
}

export default App;
