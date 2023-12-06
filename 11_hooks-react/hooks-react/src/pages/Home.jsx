//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUserReducer from '../components/HookUserReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookuseCallback from '../components/HookuseCallback'
import HookUseMemo from '../components/HookUseMemo'

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUserReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookuseCallback/>
      <HookUseMemo/>
    </div>
  )
}

export default Home