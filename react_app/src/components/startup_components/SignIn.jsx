import { Typography, Stack, FormControl, TextField, Button } from "@mui/material";

function SignIn(props){

    function redirectSignUP(){
        props.handleSign_IN_UP(false);
    }

    return (
        <Stack direction={"column"} sx={{border: "solid 1px"}} spacing={12} padding={1}>
            <FormControl sx={{paddingLeft:8, paddingRight:8}}>
                <Typography sx={{textAlign: "center"}} variant="h4" gutterBottom >Login</Typography>
                <TextField size="small" label="Email ID" type="email" required />
                <br />
                <TextField size="small" label="Password" type="password" required />
                <Button size="small" onClick={redirectSignUP}>Don't have an account, Create One</Button>

            </FormControl>


        </Stack>
    );
}

export default SignIn;