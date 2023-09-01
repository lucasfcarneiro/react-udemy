import { useEffect } from "react";
import { useState } from "react";

//Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //post refactor
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(url);
            const json = await response.json()

            setData(json);
        };
        fetchData();
    }, [url, callFetch]);

    //post refactor
    useEffect( () => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];

                const response = await fetch(...fetchOptions)
                const json = await response.json()

                setCallFetch(json);
            }
        }
        httpRequest()
    }, [config, method, url]);

    return { data, httpConfig };
};