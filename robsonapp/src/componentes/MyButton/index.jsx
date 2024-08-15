import * as React from 'react';
import {Button} from '@mui/material';
export default function MyButton(props) {
  return (

        <Button variant={props.variant} startIcon={props.startIcon} endIcon={props.endIcon}
            sx={{    
                color : props.colortext,
                backgroundColor : props.backgroundcolor,
                height : '48px',
                borderRadius : '8px',
                border : props.border,
                '&:hover' :{
                  backgroundColor: props.backgroundcolor
                },
                }}>{props.text}</Button>

  );
}



