import * as React from 'react';
import MyCard from '../componentes/MyCard';

import PersonIcon from '@mui/icons-material/Person';

export default function MyCardInfo (props) {

return (
    <MyCard icon={<PersonIcon/>} text={'Informações Pessoais'} />
)


}

