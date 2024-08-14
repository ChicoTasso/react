import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './componentes/MyButton'
import MyButtonIcon from './componentes/MyButtonIcon'
import MyButtonMedio from './componentes/MyButtonMedio'
import MyCardInfo from './MyCardInfo'
import FilterListIcon from '@mui/icons-material/FilterList';

function App() {
  const [count, setCount] = useState(0)

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
      <MyCardInfo text={'oii'}/>
      </div>
    </>
  )
}

export default App
