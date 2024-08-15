import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import './index.css'
import MyButton from '../../componentes/MyButton'
import MyButtonIcon from '../../componentes/MyButtonIcon'
import MyButtonMedio from '../../componentes/MyButtonMedio'
import MyCard from '../../componentes/MyCard'
import MyTab from '../../componentes/MyTab';
import FilterListIcon from '@mui/icons-material/FilterList';

function Home() {

  return (
    <>
      <div>
        <hr />
      <MyButton text={'atumalaca'} colortext={'white'} backgroundcolor={'#0B3B60'}/>
      <MyButton text={'atumalaca'} backgroundcolor={'#FFFFFF'} colortext ={'#0B3B60'} border={'2px solid #0B3B60'}/>
      <MyButton text={'atumalaca'} backgroundcolor={'#90989F'} colortext={'white'}/>
      <hr />
      <MyButtonMedio text={'atumalaca'} colortext={'white'} backgroundcolor={'#0B3B60'}/>
      <MyButtonMedio text={'atumalaca'} colortext={'#0B3B60'} backgroundcolor={'#FFFFFF'} border = {'1px solid #0B3B60'}/>
      <MyButtonMedio text={'atumaldasf'} colortext={'white'} backgroundcolor={'#90989F'}/>
      <hr />
      <MyButtonIcon variant={'contained'} text={'atumalaca'} colortext={'black'} backgroundcolor={'white'} icon={<FilterListIcon/>}/>
      <hr />
      <MyCard nome={'Francisco Tasso Mendes'} data={'25/11/2006'} uf={'Teresina - PI'} button={<MyButtonMedio backgroundcolor={'#0B3B60'} text={'Ver Mais'} colortext={'white'} />}/>  
      <hr />
      <MyCard icon={<PersonIcon/>} title={'Informações Pessoais'} nome={'Júlia Moura Esteves'} data={'03/03/2007'} uf={'Campo Grande - MS'} button={<MyButtonMedio backgroundcolor={'#0B3B60'} text={'Ver Mais'} colortext={'white'} />}/>
      <MyTab />
      </div>
    </>
  )
}

export default Home
