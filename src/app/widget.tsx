import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import ContextDemo from './components/ContextDemo';

export interface Widget {
  carnonicalUrl: string;
}

const Widget: FunctionalComponent<Widget> = ({ carnonicalUrl }) => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <div>Url {carnonicalUrl}</div><br />
      <div>Number {number}</div>
      <button onClick={() => setNumber(number + 1)}>Innovation article</button>
      <ContextDemo />
    </div>
  )
};

export default Widget;
