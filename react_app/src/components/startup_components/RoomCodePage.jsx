import { Paper,
    Typography,
    FormControl,
    FormControlLabel,
    FormLabel,
    Switch,
    Stack,
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    TextField,
    IconButton,
 } from "@mui/material";


import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { useState } from "react";

function RoomCodePage(){

    const [haveKey, setHaveKey]=useState(false);
    const [roomCode, setRoomCode]=useState(null);

    const [buttonText,setButtonText]=useState("Create Room");
    const [roomCreated,setRoomCreated]=useState(false);

    function handleCodeChange(event){
        setRoomCode(event.target.value);
    }

    function handleCreateRoomClick(event){
        if(haveKey)
        {
            // Write a Room Joining Code with Room Code in useState(roomCode)
        }
        else{
            // Write Room Creation Code..
            setButtonText("Join Room");
            setRoomCreated(true);
        }
    }

    return (
        <Paper elevation={4} sx={{padding: "20px",width: "360px"}}>
            <FormControl>
            <Stack direction={"column"}>
                <Stack direction={"row"}>
                    <Box>
                    <FormLabel><Typography component={"span"} variant="body1">I have a Room Joining Code</Typography></FormLabel>
                    <FormControlLabel sx={{marginLeft:1}} 
                    control={<Switch checked={haveKey} 
                    onChange={function(event,bool_value) {
                        bool_value ? setButtonText("Join Room") : setButtonText("Create Room");
                        setRoomCreated(false);
                        setHaveKey(bool_value)}
                        } />}
                        label={haveKey ? "Yes" : "No"} />
                    </Box>
                </Stack>

                <Stack direction={"row"}>
                    {haveKey ? <TextField label={haveKey ? "Enter Room Code" : ""} onChange={handleCodeChange} size="small" value={roomCode} /> : null}
                    <Button size="small" variant="contained" color="secondary" onClick={handleCreateRoomClick}>
                        <Typography variant="h6">{buttonText}</Typography>
                    </Button>
                    {
                        roomCreated ? <Card sx={{display: "flex", height: 40,marginLeft:1}} >
                            <CardContent sx={{color: "#ff5722", backgroundColor: "#fafafa"}} ><Typography sx={{marginTop: -1}} variant="h6">ABCDEF</Typography></CardContent>
                            <CardActions><IconButton>{<ContentCopyIcon size="small" color="secondary" />}</IconButton></CardActions>
                            <CardActions><IconButton>{<ShareIcon size="small" color="secondary" />}</IconButton></CardActions>
                        </Card> : null
                    }
                </Stack>

            </Stack>
            </FormControl>
        </Paper>
    );
}

export default RoomCodePage;