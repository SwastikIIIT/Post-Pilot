import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center w-full mb-16 pt-3'>
       <Link href="/" className='flex gap-2 justify-center items-center'>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50}></Image>
        <p className='logo_text'>Promptopia</p>
       </Link>
    </div>
  )
}

export default Nav