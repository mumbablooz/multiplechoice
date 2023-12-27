import Link from 'next/link'
import {themenArray} from './themenArray'
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      {themenArray.map((thema,index)=>{
        return (<div>
<Link href={'/'+index}>{thema.name}</Link>
        </div>)
      })}
     
    </main>
  )
}
