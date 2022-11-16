import React from 'react'

function Sidebaroption({Icon,option}) {
  return (
    <div className="flex justify-center p-3  text-slate-500 hover:text-white">
    <Icon className='h-[100%] '></Icon>
    <div className='pl-2 w-[60%]  font-bold'>{option}</div>
    </div>
  )
}

export default Sidebaroption