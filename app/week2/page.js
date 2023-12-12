import Link from "next/link";



export default function Page() {
    return (
        <main>

            <h1>Shopping list</h1>
            <p>Milk</p> 
            <p>Cheese</p> 
            <p>Hamburger</p>
            <Link href="../">Back</Link>
        </main>
        );
}