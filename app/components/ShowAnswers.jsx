import { useState,useEffect,useRef } from "react"

export default function ShowAnswers({question,setOpacityNone,setPoints,setTrueAnswer,setCurrentQuestionIndex}) {

    const [ answers, setAnswers ] = useState([])

    let attempt = useRef(0)

    useEffect(()=>{
        let arr =[0]  
        arr[1]=Math.floor(Math.random()*question.answers.length-1)+1
        arr[2]=Math.floor(Math.random()*question.answers.length-1)+1 
checkValue()
function checkValue(){
    if(arr[1]===arr[2]){
        arr[2]=Math.floor(Math.random()*question.answers.length-1)+1 
        checkValue()
    }
}

           const array = arr.sort(() => Math.random() - 0.5);

        setAnswers([question.answers[array[0]],question.answers[array[1]],question.answers[array[2]]])
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
