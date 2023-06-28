import { useState } from 'react'
import './App.css'
import CookFortune from './component/CookFortune'
import phrases from "./data/phrases.json"
import AuthorPhrase from './component/AuthorPhrase'

function App() {

  
  let[index,setIndex]=useState(0)
  let indexImg=0;
  

   
  document.p="";
  const changePhrase=()=>{
  // Arreglo de imagens
    let  photo = ["/fondo1.jpg","/fondo2.jpg", "/fondo3.jpg", "/fondo4.jpg"];
    //Indice de imagenes
    indexImg=Math.floor(Math.random() * photo.length ); // Función para obtener un número aleatorio dentro de un rango
      //indice toma el numero aleatorio
    index=Math.floor(Math.random() * phrases.length) // Función para obtener un número aleatorio dentro de un rango
      setIndex(index) 
      //cuerpo de la pagina, fondo imagen
      document.body.style= `background-image:url(${photo[indexImg]})`
  }

 

  return (
    <>
    <CookFortune
    data={phrases[index]}
    />
    <AuthorPhrase
    data={phrases[index]}
    />
    <article className="phortune">
   
    <button onClick={changePhrase}>Prueba Tu Suerte</button>
    
    </article>
    </>
  )
}

export default App
