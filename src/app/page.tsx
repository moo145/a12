import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
<div>
      <nav>
        <div className="flex gap-4 text-2xl">
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        </div>
      </nav>
    </div>
  )
}

export default page