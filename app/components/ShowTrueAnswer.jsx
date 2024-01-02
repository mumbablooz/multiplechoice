import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export function ShowTrueAnswer({trueAnswer,setTrueAnswer,question}) {

  const [ opacity, setOpacity ] = useState(0)

  window.scrollTo(0,0);

useEffect(()=>{
  setTimeout(()=>{
setOpacity(1)
  },0)
},[])

function WeiterButton(){
  return (<button 
  style={{
    alignSelf:'center',
    width: '100vw',
    marginTop: '0.5rem'
  }}
  onClick={()=>{
    setTrueAnswer(null)
  }}>weiter</button>)
}
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      opacity: opacity,
      transition: '0.8s ease-in-out',
    }}>
        <h2 style={{
          backgroundColor: 'lightgreen',
          padding: '1rem',
          margin: '1rem 0',
          borderRadius: '0.4rem',
        }}>Ja, das ist richtig!</h2>
        <WeiterButton />

<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
          <p>{question.question}</p>
        {trueAnswer.map((line,lineIndex)=>{
  return <b 
key={'line-'+lineIndex}
style={{
    marginBottom: '1rem'
}}>{line}</b>
  })}
          </div>
          {question.answers[0].images[0] && <Image 
          src={question.answers[0].images[0]} 
          width={200} 
          height={200} 
          sizes='100vw'
          style={{width: '100%', height: 'auto'}}
          alt='Bundesland Bild' />}
        <WeiterButton />
        
    </div>
  )
}
