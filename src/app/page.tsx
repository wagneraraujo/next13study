import { CardPersonagem } from 'components/cardPersonagem';
import Image from 'next/image';
import { Suspense } from 'react';
import { GetPersonagens } from 'utils/getPersonagens';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-lg font-bold">Personagens Start</h1>
      <Suspense fallback={<p>Carregando...</p>}>
        <GetPersonagens />
      </Suspense>
    </main>
  );
}
