import { useState, useEffect } from "react";
import { db } from "../firebase/config"
import { async } from "@firebase/util";
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
    collection,
} from "firebase/firestore"

export const useFetchDocuments = (docColletion, search = null, udi = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadData() {
            if (cancelled) return

            setLoading(true)

            const collectionRef = await collection(db, docColletion);
            try {
                let q;

                //busca
                //dashboard

                q = await query(collectionRef, orderBy("createdAt", "desc"));

                await onSnapshot(query, (querySnapshot) => {

                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });

                setLoading(false)

            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        }
        loadData()
    }, [cancelled, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return documents, loading, error;
}