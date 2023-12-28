'use client'
import React,{useEffect, useState, useContext} from 'react'
import {ShowTrueAnswer} from './ShowTrueAnswer'
import {ShowCurrentQuestion} from './ShowCurrentQuestion'
import {ShowFinalResult} from './ShowFinalResult'

export default function MultipleChoice({points,setPoints,questionArray,andAgain,setAndAgain}) {
    const [ trueAnswer, setTrueAnswer ] = useState(null)
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0)
    const [ content, setContent ] = useState(null)
    const [ sortQuestionArray, setSortQuestionArray ] = useState(questionArray.sort(() => Math.random() - 0.5))
    const questionArrayLength = questionArray.length

    //////////
useEffect(()=>{
if(andAgain){
  setTrueAnswer(null)
  setCurrentQuestionIndex(0)
  setPoints(0)

  setTimeout(()=>{
    setContent(<ShowCurrentQuestion       
        question={sortQuestionArray[0]} 
        setPoints={setPoints} 
        setTrueAnswer={setTrueAnswer}
        setCurrentQuestionIndex={setCurrentQuestionIndex}    
        />)
        window.scrollTo(0,0);
  },2000)

  setAndAgain(false)
}
},[andAgain,setAndAgain,sortQuestionArray,setPoints,setTrueAnswer,setCurrentQuestionIndex])
////////////
    useEffect(()=>{
if(trueAnswer){
        setContent(<ShowTrueAnswer 
          trueAnswer={trueAnswer} 
          setTrueAnswer={setTrueAnswer} 
          question={sortQuestionArray[currentQuestionIndex-1]}/>)

    } else if(!trueAnswer && currentQuestionIndex < questionArrayLength) {
  
      setContent(<ShowCurrentQuestion       
        question={sortQuestionArray[currentQuestionIndex]} 
        setPoints={setPoints} 
        setTrueAnswer={setTrueAnswer}
        setCurrentQuestionIndex={setCurrentQuestionIndex}

        />)
    } else if(!trueAnswer && currentQuestionIndex===questionArrayLength) {
setContent(<ShowFinalResult 
  points={points} 
  questionArrayLength={questionArrayLength}
  andAgain={andAgain}
  setAndAgain={setAndAgain}/>)
    }
    },[trueAnswer,sortQuestionArray,points,setPoints,currentQuestionIndex,questionArrayLength,setAndAgain])

  return (
    <section style={{
      width: '100vw',
      padding: '1rem',
    }}>       
        {content}
    </section>
  )
}
