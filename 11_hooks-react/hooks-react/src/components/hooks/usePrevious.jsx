import {useEffect, useRef, useDebugValue} from 'react'

export const usePrevious = (value) => {
    const ref = useRef;

    useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE ---")
    useDebugValue("o numero antarior é: "+ value)

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}