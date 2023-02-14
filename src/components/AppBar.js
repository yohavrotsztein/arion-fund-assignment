import React from "react";
// @mui
import { AppBar, Box, Typography, Toolbar, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
// icons
import AurionLogo from'../assets/arion_logo.png';
import {ReactComponent as LinkedinLogo}  from'../assets/linkedin_logo.svg';
import {ReactComponent as GithubLogo}  from'../assets/github_logo.svg';

const MyAppBar = styled(AppBar)({
  backgroundColor: "#ffffff", 
  padding: "8px",
  boxShadow: "none",
});

const Logo = styled('img')({
  height: "40px",
  width: "40px",
});
  

export default function Header() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppBar >
        <Toolbar >
          <Box><Logo src={AurionLogo} alt='logo'/></Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Assignment Yohav Rotsztein
          </Typography>
          <MenuItem  component={"a"} target="_blank" href={"https://www.linkedin.com/in/yohav-rn-700247121/"}><LinkedinLogo/></MenuItem>
          <MenuItem  component={"a"} target="_blank" href={"https://github.com/yohavrotsztein/arion-fund-assignment"}><GithubLogo/></MenuItem>
        </Toolbar>
      </MyAppBar>
    </Box >
  );
}