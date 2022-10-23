import React from 'react'


export default function BtnGetFamale({isActive, clicked}) {
  return (
    <div>
        <button  onClick={clicked}>{isActive ? 'Get another famale' : 'Get Famale'}</button>
    </div>
  )
}