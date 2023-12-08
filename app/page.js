import Link from "next/link"
import HomePage from "./student-info"


export default function Home() {
  return (
    <main>
      <h6>
        CPRG 306: Web Development 2 - Assignments  
      </h6>
      <h2>Miles Dolphy-King,
          CPRG306-E
      </h2>    
      <Link href="week2">Proto Shopping List</Link>
      <h1><Link href="week3">Shopping List</Link></h1>
      <h1><Link href="week4"> Week 4</Link></h1>
      <HomePage />      

    </main>
  )
}
