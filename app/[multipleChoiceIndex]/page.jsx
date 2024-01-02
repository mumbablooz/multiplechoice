'use client'
import { useState,useEffect } from 'react'
import MultipleChoice from '../components/MultipleChoice'
import {themenArray} from '../themenArray'

export default function MultipleChoicePage({params}) {

  const [ opacity, setOpacity ] = useState(0)
  const [fragen,setFragen] = useState(null) 
  const [pageIndex,setPageIndex] = useState(params.multipleChoiceIndex) 
  const [ andAgain, setAndAgain ] = useState(false) 
  useEffect(()=>{
console.log(themenArray[pageIndex].stateName)
      fetch(themenArray[pageIndex].link)
      .then(res =>res.json())
      .then(data=> {
      setFragen(data[themenArray[pageIndex].stateName].content)
  })
  },[setFragen,pageIndex])
  
  useEffect(()=>{
setOpacity(1)
},[])

const [ points, setPoints ] = useState(0)

  return (
    <section
    style={{opacity: opacity}}
    className="flex min-h-screen flex-col items-center p-2">
    {fragen && <div style={{
          border: '1rem solid rgb(228, 230, 173)',
          borderRadius: '0.5rem',
          padding: '1rem',
     }}>
       <p>Beantworte die Fragen zum Thema: </p>
       <b>{themenArray[pageIndex].name}</b>
<p>{points} Punkte / {fragen.length} Fragen</p>
     <p style={{
      fontSize: '1.3rem',
     }}>Du bekommst für jede richtig beantwortete Frage 1 Punkt</p>
      </div>} 

     {fragen && <MultipleChoice 
     points={points} 
     setPoints={setPoints} 
     questionArray={fragen}
     andAgain={andAgain}
     setAndAgain={setAndAgain}/>}
    </section>
  )
}
