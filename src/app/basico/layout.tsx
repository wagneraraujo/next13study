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
    <div className="flex min-h-screen flex-col items-center justify-between p-0">
      <h4>Layout do site</h4>
      {children}
    </div>
  );
}
