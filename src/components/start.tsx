'use client'

import {useEffect, useState} from "react";

export default function StartRequest() {
    const [loading, setLoading] = useState(false);
    const [personagens, setPersonagens] = useState([])

    

    
    
    async function obterPersonagens(){
        try{
            setLoading(true)
            const resp = await fetch('https://swapi.dev/api/people')
            const dados = await resp.json();
            setPersonagens(dados?.results)
        }
        finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        obterPersonagens()

        if(personagens){
            console.log(personagens)
        }
    },[])


    return (
        <></>
        )
}
