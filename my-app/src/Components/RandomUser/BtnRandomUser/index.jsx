import React from 'react'

export default function BtnRandomUser({isActive, clicked}) {
  return (
    <div>
        <button onClick={clicked}>{isActive ? 'Get another user' : 'Get User'}</button>
    </div>
  )
}
