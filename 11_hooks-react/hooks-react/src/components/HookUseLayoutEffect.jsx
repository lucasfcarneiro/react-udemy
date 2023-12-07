import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {

    const [name,setname] = useState("Algum nome")

    useEffect(()=>{
        console.log("2")
        setname("Mudou de novo - useEffect")
    },[])

    useLayoutEffect(()=>{
        console.log("1")
        setname("Outro nome - useLayoutEffect")
    },[])

    console.log(name)

  return (
    <div>
        <h2>useLayoutEffect</h2>

        <hr />
    </div>
  )
}

export default HookUseLayoutEffect