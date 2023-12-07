import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    //const premiumNumber = ["0", "100", "200"] 

    const premiumNumber = useMemo(() => {
        return ["0", "100", "200"]
    }, [])

    useEffect(() => {
        console.log("useEffect - Premium numbers foi alterado.")
    }, [premiumNumber])

    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumber.includes(number) ? <p>Acertou o numero</p> : ""}
            <hr />
        </div>
    )
}

export default HookUseMemo