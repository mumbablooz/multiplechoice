import { useState,useEffect,useRef } from "react"

export default function ShowAnswers({question,setOpacityNone,setPoints,setTrueAnswer,setCurrentQuestionIndex}) {

    const [ answers, setAnswers ] = useState([])

   let allAnswersRef = useRef(null)
    let attempt = useRef(0)

    useEffect(()=>{
// Erste Frgae raus nehmen
let answersArr = question.answers
const theTrueAnswer = answersArr.shift()

// Rest Array mischen
allAnswersRef.current = answersArr.sort(() => Math.random() - 0.5)
allAnswersRef.current.unshift(theTrueAnswer)
// zwei random indexe erstellen (die sich nicht gleichen) ,index null wird mit 0 belegt
        let arr =[]  
         arr[0] = 0
        arr[1]=Math.floor(Math.random()*question.answers.length-1)+1
        arr[2]=Math.floor(Math.random()*question.answers.length-1)+1 

        checkValue()
function checkValue(){
    if(arr[1] ==0){
        arr[1]=Math.floor(Math.random()*question.answers.length-1)+1 
        checkValue()
    } else if(arr[2] ==0){
        arr[2]=Math.floor(Math.random()*question.answers.length-1)+1 
        checkValue()
    } else if(arr[1]===arr[2]){
        arr[2]=Math.floor(Math.random()*question.answers.length-1)+1 
        checkValue()
        console.log('checkValue')
    }
}
// dreier Array mischen (mit allen angezeigten 3 Antworten)
           const array = arr.sort(() => Math.random() - 0.5);
        setAnswers([allAnswersRef.current[array[0]],allAnswersRef.current[array[1]],allAnswersRef.current[array[2]]])
      },[])

  return (<div>

{answers.map((answer,index)=>{
return (<div 
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
    </div>)
})
    }
  </div>)
}
