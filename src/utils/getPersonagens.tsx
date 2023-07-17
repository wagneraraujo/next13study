import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
import {useState} from "react";

export default function getPersonagens() {
    const [personagens, setPersonagens] = useState<string | any>({})
    const [loadingPersonagens, setLoadingPersonagens] = useState(false)

    async function apiStartWars(){
        const response = await fetch('https://swapi.dev/api/people');
        if(response){
            const dados = await response?.json()
            setPersonagens(dados?.results);
        }
    }
    return {
        personagens
    }
}
