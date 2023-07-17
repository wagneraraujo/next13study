import {useState} from "react";
import {any, string} from "zod";

interface PersonagensProps {
    personagens : string | any[]
}

export async function useStarwars(){
    const [personagens, setpersonagens] = useState''([] as PersonagensProps);
    const [loadingpersonagens, setloadingpersonagens] = useState(false);
    
    //fetch
    
    return {
        loadingpersonagens,
        personagens, 
    }
}