import { useEffect } from "react";
import { useState } from "react";

//Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //post refactor
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // loading
    const [loading, setLoading] = useState(false)

    //tratando erros try/catch
    const [error, setError] = useState(null)

    //desafio 6
    const [itemId, setItemId] = useState(null)

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
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                }
            })
            setItemId(data)
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            try {
                const response = await fetch(url);
                const json = await response.json()

                setData(json);
            } catch (error) {
                setError ("Houve um erro ao carregar os dados")
            }

            setLoading(false)
        };
        fetchData();
    }, [url, callFetch]);

    //post refactor
    useEffect(() => {
        const httpRequest = async () => {

            let json

            if (method === "POST") {
                let fetchOptions = [url, config];

                const response = await fetch(...fetchOptions)
                json = await response.json()

            }else if(method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`
                
                const response = await fetch(deleteUrl,config)
                json = await response.json()
            }
            setCallFetch(json);
        }
        httpRequest()
    }, [config, method, url]);

    return { data, httpConfig, loading, error};
};