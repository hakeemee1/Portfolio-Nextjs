import React from 'react'

function NavbarItem({ Icon, title}) {
  return (
    <div className=' flex flex-col items-center group w-12 sm:w-20 hover:text-white '>
        <Icon className=" h-8 my-1 group-hover:animate-bounce" />
        <p className=' group-hover:opacity-100 opacity-0 hover:opacity-100 traking-widest'>{title}</p>
    </div>
  )
}

export default NavbarItem