import React, { useEffect, useState } from 'react'

export function ShowTrueAnswer({trueAnswer,setTrueAnswer,question}) {

  const [ opacity, setOpacity ] = useState(0)

  window.scrollTo(0,0);

useEffect(()=>{
  setTimeout(()=>{
setOpacity(1)
  },0)
},[])

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
                <button 
        style={{
          alignSelf:'center',
          width: '100vw',
        }}
        onClick={()=>{
          setTrueAnswer(null)
        }}>weiter</button>

<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
          <p>{question}</p>
        {trueAnswer.map((line,lineIndex)=>{
  return <b 
key={'line-'+lineIndex}
style={{
    marginBottom: '1rem'
}}>{line}</b>
  })}
          </div>
          
        <button 
        style={{
          alignSelf:'center',
          width: '100vw',
        }}
        onClick={()=>{
          setTrueAnswer(null)
        }}>weiter</button>
    </div>
  )
}
