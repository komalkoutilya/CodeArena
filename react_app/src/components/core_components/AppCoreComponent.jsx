import { Stack, Grid } from "@mui/material"

import Header from "./Header";
import CodeArea from "./CodeArea";
import QuestionArea from "./QuestionArea";
import TestCaseSubmitArea from "./TestCaseSubmitArea";



function AppCoreComponent(){
    return (
        <Stack spacing={0} padding={0} margin={0} >
            <Header />
            <hr />
            <Stack spacing={2}>
            <Grid container>
                <Grid item md={4.8} sx={{borderRight: "solid 2px #aaaaaa"}}>
                    <QuestionArea />
                </Grid>
                
                <Grid item md={7.2}>
                    <CodeArea />
                    <TestCaseSubmitArea />
                </Grid>
            </Grid>
            </Stack>
        </Stack>
    );
}

export default AppCoreComponent;