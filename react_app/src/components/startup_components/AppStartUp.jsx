import { Grid, Stack } from "@mui/material";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import Banner from "./Banner";

import MiniProfile from "./MiniProfile";
import RoomCodePage from "./RoomCodePage";
import { useState } from "react";

function AppStartUP(){

    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [showSignIn,setShowSignIn]=useState(true);

    // a function to handle signin-signup hook in corresponding component files...
    function handleSign_IN_UP(needSignIn){
        if(needSignIn){
            setShowSignIn(true);
        }
        else{
            setShowSignIn(false);
        }
    }

    return (
        <Stack direction="column">
            <Header />
            <Banner />
            <br />
            <Grid container fullWidth height={"100px"}>
                <Grid item sx={{backgroundColor: "#eeeeee"}} md={7} padding={5} >
                    {/* main room section... */}
                    <RoomCodePage />
                </Grid>

                <Grid item md={5} >
                    { /* Mini Profile Section... */ }
                    {isLoggedIn ? <MiniProfile /> : (showSignIn ? <SignIn handleSign_IN_UP={handleSign_IN_UP} /> : <SignUp handleSign_IN_UP={handleSign_IN_UP} />)}
                </Grid>
</Grid>


        </Stack>
    );
}

export default AppStartUP;


