import {Box, Stack, Typography} from "@mui/material"
import AboutUsImage from "../assets/images/lui-peng-8NxTrV6i4WQ-unsplash 1.png"
import Chechlist from "../assets/images/Ic_chechlist (1).png" 


const AboutUs = () => {
  return (
    <Stack sx={{flexDirection: {md: "row", xs: "column-reverse"}}}>
       <Stack sx={{mx: "20px", alignSelf: {xs: "center"}, mt: {xs: "40px", sm: "50px", md: "0"}}}>
       <img src={AboutUsImage} className="AboutUsImage" alt="AboutUsImage" style={{ borderRadius: "10px"}} />          
       </Stack>
       <Stack direction="column" sx={{pl: {md: "90px"}, py: "20px", mx: {xs: "10px"}}}>
          <Stack>
             <Typography 
                 variant="h2" 
                 sx={{ color: "#23262F", 
                      fontFamily: 'Saira', 
                      fontWeight: "600", textAlign: "left", fontSize: "30px"}}>
                 We Create your home <br /> more aestetic
             </Typography>
             <Typography variant="body2" sx={{ mt: "10px", color: "#23262F", fontFamily: 'Saira', textAlign: "left", fontSize: "15px"}}>
                 Furnitre power is a software as services for multiperpose <br /> business management system, 
             </Typography>
          </Stack>
          <Stack sx={{mt: "50px"}}>
            <Stack direction="row">
               <Stack>
                  <img src={Chechlist} alt="Chechlist"  />
              </Stack>
               <Stack>
                <Typography variant="h4" sx={{color: "#23262F", fontWeight: "600", fontFamily: 'Saira', textAlign: "left", fontSize: "20px"}}>Valuation Services</Typography>
                <Typography variant="body2" sx={{ mt: "10px", color: "#23262F", fontFamily: 'Saira', textAlign: "left", fontSize: "15px"}}>Sometimes features require a short description.  This can be detailed description</Typography>
              </Stack>
            </Stack>
            <Stack sx={{mt: "30px"}} direction="row">
              <Stack>
                  <img src={Chechlist} alt="Chechlist"  />
              </Stack>
               <Stack>
                  <Typography variant="h4" sx={{color: "#23262F", fontWeight: "600", fontFamily: 'Saira', textAlign: "left", fontSize: "20px"}}>Development of Furniture Modelss</Typography>
                <Typography variant="body2" sx={{ mt: "10px", color: "#23262F", fontFamily: 'Saira', textAlign: "left", fontSize: "15px"}}>Sometimes features require a short description. This can be detailed description</Typography>
              </Stack>
            </Stack>
          </Stack>
       </Stack>
    </Stack>
  )
}

export default AboutUs;