import Navbar from "./Navbar"
import {Box, Divider, Typography, Button, Stack} from "@mui/material"



const HomeBanner = () => {
  return (
    <Stack className="homebanner" sx={{height: {lg: "720px", md: "620px", xs: "700px"}}}  direction="column" alignItems="center">
     <Box sx={{width: {md: "1000px"}}}>
      <Navbar />
      <Stack mt={10} p={2} gap="30px" alignItems="center" textAlign="center" justifyContent="center">
         <Typography variant="h1" fontWeight="600"  sx={{fontSize: {lg: "54px", xs: "29px"}, fontFamily: 'Saira'}} >
            Creative Home Simpify your <br /> Furniture
         </Typography>
         <Typography  fontWeight="300" sx={{fontSize: {lg: "20px", xs: "17px"}, fontFamily: 'Saira'}} variant="body2">
            Do i have consent to record this meeting gain locaion, root-and- <br /> branch, review, nor game plan who’s the goto
         </Typography>
         <Button sx={{background: "rgba(226,226,226,0.5)", fontWeight: "600", color: "#fff", px: 6, fontFamily: 'Saira'}}>
           Shop Now
         </Button>
      </Stack>
      <Stack 
          textAlign="center" 
          sx={{background: "#286F6C", flexDirection: {md: "row", xs: "column"}, flexWrap: "wrap", borderRadius: "20px", gap: 3, justifyContent: "space-around" }} 
          mt={20} 
          mx={2} 
          p={4} 
          >
        <Stack direction="row" justifyContent="space-around" spacing={{lg: 8, md: 9}}>
          <Stack direction="column" gap={1} alignItems="center" >
            <Typography variant="h4" fontWeight="600" fontFamily='Saira'>7</Typography>
            <Typography variant="body2" fontFamily='Saira'>Year <br /> Experience</Typography>
         </Stack>
         <Divider orientation="vertical" color="#fff" flexItem/>
         <Stack direction="column" alignItems="center">
            <Typography variant="h4" fontWeight="600" fontFamily='Saira'>2</Typography>
            <Typography variant="body2" fontFamily='Saira'>Opened <br /> in the country</Typography>
         </Stack>
       </Stack>
         <Divider orientation="vertical" sx={{display: {md: "block", xs: "none"}}} color="#fff" flexItem/>
      <Stack direction="row" justifyContent="space-around" spacing={{lg: 8,  md: 9}}>
          <Stack direction="column" alignItems="center" >
            <Typography variant="h4" fontWeight="600" fontFamily='Saira'>10k+</Typography>
            <Typography variant="body2" fontFamily='Saira'>Furniture <br /> sold</Typography>
         </Stack>
         <Divider orientation="vertical" color="#fff" flexItem/>
         <Stack direction="column" alignItems="center" >
            <Typography variant="h4" fontWeight="600" fontFamily='Saira'>260+</Typography>
            <Typography variant="body2" fontFamily='Saira'>Variant <br /> Furniture</Typography>
         </Stack>
      </Stack>
      </Stack>
      </Box>
    </Stack>
  )
}

export default HomeBanner;