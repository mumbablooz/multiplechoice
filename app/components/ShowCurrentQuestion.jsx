
import React,{useState,useEffect} from 'react'
import ShowAnswers from './ShowAnswers'

export function ShowCurrentQuestion({question,setPoints,setTrueAnswer,setCurrentQuestionIndex}) {

    const [ opacity, setOpacity ] = useState(0)
     const [ opacityNone, setOpacityNone ] = useState(false)

    window.scrollTo(0,0);
 
    useEffect(()=>{
        if(!opacityNone){
      setTimeout(()=>{
    setOpacity(1)
      },0)
    } else {
      setTimeout(()=>{
    setOpacity(0)
      },0)     
    }
    },[opacityNone])

    return (
    <div style={{
        opacity: opacity,
        transition: '0.8s ease-in-out',
    }}>
<h3>{question.question}</h3>
  <ShowAnswers question={question} setOpacityNone={setOpacityNone} setPoints={setPoints} setTrueAnswer={setTrueAnswer} setCurrentQuestionIndex={setCurrentQuestionIndex}/>  
    </div>
  )
}
