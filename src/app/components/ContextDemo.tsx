import { h, FunctionalComponent } from 'preact';
import { withAppContext } from '../../foundations/context';

export interface ContextDemo {
  env: string;
}

const ContextDemo: FunctionalComponent<ContextDemo> = ({ env }) => (
  <div>ENV {env}</div>
);

export default withAppContext(ContextDemo);
