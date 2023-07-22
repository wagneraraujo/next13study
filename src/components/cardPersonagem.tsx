import { getItems } from 'utils/getPersonagens';

export const CardPersonagem = ({ name, gender, birth_year }: getItems) => {
  return (
    <div className="w-1/4 sm:text-current">
      <h3 className="bg-sky-50 p-2 ">
        {name} | {birth_year}
      </h3>
      <p>gender: {gender}</p>
    </div>
  );
};
