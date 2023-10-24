import { useState, useEffect } from "react";
import { db } from "../firebase/config"
import { async } from "@firebase/util";
import {
    doc, getDoc
} from "firebase/firestore"

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadDocument() {
            if (cancelled) return;

            setLoading(true);

            try {
                
                const docRef = await  doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(true)
            }
        }
        loadDocument()
    }, [docCollection,id, cancelled]); //monitora essas duas variaveis para em caso de mudanca ser executado o useffect

    useEffect(() => {
        return () => {setCancelled(true)}
    }, [])

    return {document, loading, error}
}