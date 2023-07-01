import { useEffect } from 'react';

export default function Basico({ teste }: string) {
  useEffect(() => {
    console.log(teste);
  }, [teste]);

  return <div>teste página</div>;
}
