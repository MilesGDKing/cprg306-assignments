import Link from "next/link"
import GitHub from "./student-info"
import StudentInfo from "./student-info"


export default function Home() {
  return (
    <main>
      <h6>
        CPRG 306: Web Development 2 - Assignments  
      </h6>
      <h1>Miles Dolphy-King,
          CPRG306-E
      </h1>
      <StudentInfo />
      <h1>Week 2</h1>
      <Link href="week2">Shopping List</Link>
      <h1>Week 3</h1>
      <h1>Week 4</h1>
      
    </main>
  )
}
