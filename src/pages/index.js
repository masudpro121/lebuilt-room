import Image from 'next/image'
import { Inter } from 'next/font/google'
import OnBoarding from "@/Components/OnBoarding/OnBoarding"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <OnBoarding />
   </div>
  )
}
