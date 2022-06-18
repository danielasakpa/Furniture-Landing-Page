import AboutUs from "./AboutUs"
import {Box, Stack} from "@mui/material"

const Description = () => {
  return (
    <Stack direction="column" alignItems="center">
        <Box sx={{width: {md: "1000px"}, mt: {md: "200px", sm: "200px", xs: "350px"}}}>
          <AboutUs />
        </Box>
    </Stack>
  )
}

export default Description;