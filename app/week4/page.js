import React from 'react';
import Link from 'next/link';
import NewItem from './new-item';

export default function Week4() {
  return (
    <div>
        <NewItem />
        <Link href="../">Back</Link>
    </div>
  );
};
