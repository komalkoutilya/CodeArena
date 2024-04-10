import { Stack, Typography, Button, ButtonGroup } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import PeopleIcon from '@mui/icons-material/People';

function Header(){
    return (
        <Stack direction={"column"} spacing={1}>
            <Typography variant="h3" gutterBottom sx={{color: "secondary.main", paddingLeft:"32px"}}>Code Arena</Typography>

            <Stack direction={"row"} spacing={5} pl={4} pr={4}>
                <ButtonGroup fullWidth orientation="horizontal" size="large" color="secondary" >
                    <Button startIcon={<HomeIcon />} >Home</Button>
                    <Button startIcon={<DescriptionIcon />} >References</Button>
                    <Button startIcon={<SportsMartialArtsIcon />} >Exercises</Button>
                    <Button startIcon={<PeopleIcon />} >About Us</Button>
                </ButtonGroup>
            </Stack>
            <hr />
        </Stack>
    );
}

export default Header;