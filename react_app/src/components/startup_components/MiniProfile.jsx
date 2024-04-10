import {Stack, Card, CardContent, CardMedia, CardActions, Typography} from "@mui/material";

function MiniProfile(){
    return (
        <Stack direction={"column"}>
            <Card sx={{padding: 2, paddingLeft:3, display: "flex"}}>
                <CardMedia component={"img"} sx={{width:200, height:200, borderRadius:"50%"}} alt="profile-photo" src="https://th.bing.com/th/id/OIP.Y77nyBKgw3flpKuq7tKEyAAAAA?pid=ImgDet&w=178&h=234&c=7&dpr=2" />
                <CardContent>
                    <Typography variant="h5" aria-label="name" >Komal Koutilya Penumarti</Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>

        </Stack>
    );
}

export default MiniProfile;