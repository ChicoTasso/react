import * as React from 'react';
import Stack from '@mui/material/Stack';
import {Button, styled} from '@mui/material';
export default function Botaozao(props) {
  return (

        <StyledButton variant='contained'
            sx={{    
                color : props.colortext,
                backgroundColor : props.backgroundcolor,
                margin : '20px',
                width : '280px',
                height : '48px',
                borderRadius : '8px',}}>{props.text}</StyledButton>

  );
}

const StyledButton = styled(Button)({
});
