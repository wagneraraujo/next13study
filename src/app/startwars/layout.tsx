import {
  ReactElement,
  ReactNode,
  ReactDOM,
  ReactComponentElement,
  ReactHTMLElement,
  ReactPropTypes,
} from 'react';

export default async function RooyLayout({ children }: any) {
  return (
    <div className="flex min-h-screen p-0">
      <div><h4>Busca Star</h4> <br /> <br /></div>
      <div>{children}</div> 
    </div>
  );
}
