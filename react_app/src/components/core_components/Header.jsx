import { Stack, Typography, Grid, ButtonGroup, Button } from "@mui/material";

function Header(){
    return (
        <Stack direction={"row-reverse"}>
        <Grid container>
            <Grid item md={10}>
                <Typography variant="h4">1037 Substring with Concatenation of All Words</Typography>
            </Grid>

            <Grid item md={2}>
            <ButtonGroup>
                <Button>1</Button>

                <Button>2</Button>

                <Button>3</Button>

                <Button>4</Button>

                <Button>5</Button>
            </ButtonGroup>
            </Grid>
        </Grid>
        </Stack>
    );
}

export default Header;