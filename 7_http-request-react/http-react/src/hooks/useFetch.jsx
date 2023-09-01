import { useEffect } from "react";
import { useState } from "react";

//Custom hook
export const useFetch = (url) => {

    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(url);
            const json = await response.json()

            setData(json);
        };
        fetchData();
    },[url]);

    return {data};
};