import Link from 'next/link'
import {themenArray} from './themenArray'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      {themenArray.map((thema,index)=>{
        return (<div 
        key={'themen-'+index}
        style={{marginBottom: '1rem'}}>
<Link href={'/'+index}>
  <p>{thema.name}</p>
  <Image 
          src={'https://cdn.pixabay.com/photo/2015/12/01/10/15/germany-lander-1071894_1280.jpg'} 
          width={933} 
          height={1280} 
          style={{width: '10rem', height: 'auto'}}
          alt='Bundeslander Bild' />
    </Link>
        </div>)
      })}
     
    </main>
  )
}
