import React, { useEffect, useState, useContext }  from 'react'
import Link from 'next/link'
import { AndAgainContext } from '../context'

export function ShowFinalResult({points,questionArrayLength}) {
  const [ opacity, setOpacity ] = useState(0)

  let { andAgain, setAndAgain } = useContext(AndAgainContext)

  useEffect(()=>{
    setTimeout(()=>{
  setOpacity(1)
    },0)
  },[])

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: opacity,
        transition: '0.8s ease-in-out',
    }}>
        <p style={{
            margin: '5rem 0 3rem 0'
        }}>Du hast es geschafft. </p>
     {points===questionArrayLength && <p style={{
      backgroundColor: 'lightgreen',
      borderRadius: '1rem',
      padding: '1rem'
     }}>Yeahhh, du bist Profi. Du konntest wirklich alle Fragen richtig beantworten !!!</p>}
        <p style={{
            marginBottom: '1rem'
        }}>Punkte: {points} / {questionArrayLength} </p>
           <Link href={'/AllQuestions'}><p style={{
          border: '1rem solid rgb(228, 230, 173)',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          margin: '1rem 0'
        }}>Alle Fragen mit richtigen Antworten</p></Link>
        <button 
        style={{
          alignSelf:'center',
          width: '100vw',
          height: '30vh',
          fontSize: '5rem'
        }}
        onClick={(e)=>{
          e.target.style.backgroundColor='lightgreen'
            setAndAgain(true)
        }}
        >Nochmal</button>
    </div>
  )
}
