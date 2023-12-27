
import React,{useState,useEffect,useRef} from 'react'

export function ShowCurrentQuestion({question,setPoints,setTrueAnswer,setCurrentQuestionIndex}) {

    const [ opacity, setOpacity ] = useState(0)
    const [ answersLength, setAnswersLength ] = useState(question.answers.length)
    const [ opacityNone, setOpacityNone ] = useState(false)
    let attempt = useRef(0)
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
<div>
    {question.answers.map((answer, index)=>{

       return <div 
       key={'answer'+index}
       id={'answer'+index}
       style={{
        marginBottom: '2rem',
       }}
       >
        <b>{(index+1)+'.'}</b>

        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
        
        {answer.answer.map((line,lineIndex)=>{
  
  return (<p 
key={'line-'+lineIndex}

style={{
    marginBottom: '1rem'
}}>{line}</p>)
  })}  
        </div>    

<button 

onClick={(e)=>{

    if(answer.trueAnswer===true){

        e.target.style.backgroundColor= 'green'
        e.target.style.disabled = true
        setTimeout(()=>{
            if(attempt.current===0){
                setPoints(rev=>rev+1)
            }
            setTrueAnswer(answer.answer)
            setCurrentQuestionIndex(rev=>rev+1)
            attempt.current=0
        },1000)       

        setOpacityNone(true)
    } else {
        e.target.style.backgroundColor= 'red'
        
        attempt.current=rev=>rev+1
    }

}}>Auswählen</button>
       </div> 
    })}
</div>      
    </div>
  )
}
