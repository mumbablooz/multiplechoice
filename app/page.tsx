import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
const multipleChoiceIndex= 0
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Link href={'/'+multipleChoiceIndex}>multipleChoiceIndex</Link>
    </main>
  )
}
