'use client'
import React,{useState,useEffect} from 'react'

export default function MultipleChoice() {
    const [fragen,setFragen] = useState('') 
    useEffect(()=>{

        fetch('https://api-gamma-topaz.vercel.app/multiplechoice/bundeslaender.json')
        .then(res =>res.json())
        .then(data=> {
        setFragen(data.bundeslaender)
    })

    },[fragen,setFragen])
  return (
    <div>
        <h2>Bundesländer</h2>
        <p>{fragen && fragen[0].Frage}</p>
    </div>
  )
}
