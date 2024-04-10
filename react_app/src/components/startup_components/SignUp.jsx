import { Typography, Stack, FormControl, TextField, Button, getButtonGroupUtilityClass } from "@mui/material";

function SignUp(props){
    
    function redirectSignIN(){
        props.handleSign_IN_UP(true);
    }

    return (
        <Stack direction={"column"} sx={{border: "solid 1px"}} spacing={12} padding={1}>
            <FormControl sx={{paddingLeft:8, paddingRight:8}}>
                <Typography sx={{textAlign: "center"}} variant="h4" gutterBottom >Sign UP</Typography>
                <TextField size="small" label="Email ID" type="email" required />
                <br />
                <TextField size="small" label="Password" type="password" required />
                <br />
                <TextField size="small" label="Confirm Password" type="password" required />
                <Button size="small" onClick={redirectSignIN}>Already have an account, Login</Button>

            </FormControl>
        </Stack>
    );
}

export default SignUp;