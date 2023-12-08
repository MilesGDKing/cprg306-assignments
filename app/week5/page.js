import React from 'react';
import Link from "next/link";
import ItemList from "./item-list";

export default function Page(){
    return(
            <main>
                        <ItemList />
                        <Link href="../">Back</Link>
            </main>
    );
}