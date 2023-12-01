import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUserReducer from '../components/HookUserReducer'
import HookUseEffect from '../components/HookUseEffect'

const Home = () => {
  return (
    <div>
      <HookUseState/>
      <HookUserReducer/>
      <HookUseEffect/>
    </div>
  )
}

export default Home