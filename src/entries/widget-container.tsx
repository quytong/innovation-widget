import { h, FunctionalComponent } from 'preact';
import _get from 'lodash/get';
import { AppContext } from '../foundations/context';
import Widget from '../app/widget';

export interface WidgetContainer {
  dataCarnonicalUrl: string;
  dataEnv: string;
}

const WidgetContainer: FunctionalComponent<WidgetContainer> = (props: WidgetContainer) => {
  const carnonicalUrl: string = _get(props, 'dataCarnonicalurl', '');
  const env: string = _get(props, 'dataEnv', 'dev');
  console.log('env', env);

  return (
    <AppContext.Provider value={{
      env
    }}>
      <Widget
        carnonicalUrl={carnonicalUrl}
      />
    </AppContext.Provider>
  )
}

export default WidgetContainer;
