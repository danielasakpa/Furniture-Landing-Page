import {Stack, Typography, Link } from "@mui/material"

const Navbar = () => {
  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="center" m={0} sx={{px: 3, py: 5}}>
      <Link href="#" sx={{fontSize: {lg: "30px", xs: "20px", fontWeight: "600"}}} color="#fff" underline="none">
        FurniShop
      </Link>
      <Stack flexDirection="row" className="navbar-link" sx={{height: "100%", display: {md: "block", xs: "none"}}}  justifyContent="space-between" alignItems="center">
       <Link  href="#" color="#fff" mr={2}  underline="none" >Home</Link >
       <Link  href="#" color="#fff" mr={2} underline="none" >About</Link >
       <Link  href="#" color="#fff" mr={2} underline="none" >Features</Link >
       <Link  href="#" color="#fff" mr={2} underline="none" >Contact</Link >
      </Stack>
    
          
          
    
    </Stack>
  )
}

export default Navbar;