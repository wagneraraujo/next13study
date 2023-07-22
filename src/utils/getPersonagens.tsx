import { CardPersonagem } from 'components/cardPersonagem';
import { ReactNode } from 'react';

// const response = await fetch('https://swapi.dev/api/people');

export interface getItems {
    name: string;
    gender?: string;
    birth_year?: string;
}

export async function GetPersonagens() {
    const response = await fetch('https://swapi.dev/api/people');
    const personagens = await response.json();
    console.log(personagens);

    return personagens?.results.map((item: getItems) => {
        return (
            <CardPersonagem
                name={item.name}
                birth_year={item.birth_year}
                gender={item.gender}
            />
        );
    });
}
