import habitat from 'preact-habitat';
import Container from './widget-container';

const _habitat = habitat(Container);

_habitat.render({
  selector: '#philly-innovation-widget',
  clean: true
});
