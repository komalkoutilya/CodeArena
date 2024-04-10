import { Stack, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
function Banner(){
    return (<Stack sx={{textAlign: "center",backgroundImage: `url("http://transparenttextures.com/patterns/diagmonds.png")`}}>
        <Typography variant="h2" gutterBottom sx={{padding:3, color: "white", fontFamily: "'Brush Script MT', cursive", textShadow: "0 0 3px #000000, 0 0 5px #000000"}}><SchoolIcon sx={{fontSize: 120, color: "#000000", stroke: "white", strokeWidth: 0.5}} fontSize="large" /> Plan! Code! and Execute! </Typography>
    </Stack>);
}

export default Banner;