import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botaozao from './componentes/MyButton'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Botaozao text={'atumalaca'} backgroundcolor={'#0B3B60'}/>
      <Botaozao text={'atumalaca'} backgroundcolor={'#FFFFFF'} colortext ={'#0B3B60'}/>
      <Botaozao text={'atumalaca'} backgroundcolor={'#90989F'}/>
      </div>
    </>
  )
}

export default App
