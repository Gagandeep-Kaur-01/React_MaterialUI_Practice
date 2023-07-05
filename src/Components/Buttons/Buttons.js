import React, {useState} from 'react';
import { Button, Paper, ButtonGroup } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';



function Buttons () {

  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false)

  const clickMe = ()  =>{  
    alert("function called");
    setColor("secondary")
    setDisableBtn(true)
 }

    return(
        <Paper>       
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button 
          variant="contained" 
          color={color} 
          disabled = {disableBtn}
          onClick = { () => clickMe() }
          startIcon = {<AssistantDirectionIcon />}
          endIcon = {<Delete />}          
          >
          Click Me
        </Button>
        <ButtonGroup orientation = "vertical" variant='outlined' color='primary'>
          <Button>
            One
          </Button>
          <Button >
            Two
          </Button>
          <Button >
            Three
          </Button>
        </ButtonGroup>
        
      </Paper>
    )
}

export default Buttons;