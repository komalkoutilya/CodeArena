import {Stack, Card, CardContent, CardMedia, CardActions, Typography} from "@mui/material";

function MiniProfile(){
    return (
        <Stack direction={"column"}>
            <Card sx={{padding: 2, paddingLeft:3, display: "flex"}}>
                <CardMedia component={"img"} sx={{width:200, height:200, borderRadius:"50%"}} alt="profile-photo" src="https://avatars.githubusercontent.com/u/122853435?v=4" />
                <CardContent>
                    <Typography variant="h5" aria-label="name" >Komal Koutilya Penumarti</Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>

        </Stack>
    );
}

export default MiniProfile;