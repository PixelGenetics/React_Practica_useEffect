import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'
import Carga_error from './components/Carga_error'

function App() {
  
  const [imagen,setImagen] = useState('')
  console.log("Estoy fuera del useEffect")
  
  useEffect(()=> {
    console.log("Hola soy un useEffect")
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(respuesta => setImagen(respuesta.data.message))
    .then( () => (<Carga_error /> ))
    .catch(error => console.log(error))
    //.finally( ()=> <Carga_error /> )
    
  }, [])
  
  return (
    <>
    {
      <Carga_error />
    }
  <img src={imagen} alt="" />
  <p>xxxsy</p>
    </>
  )
}

export default App
