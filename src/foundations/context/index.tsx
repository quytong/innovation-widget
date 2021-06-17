import { createContext, Context, h } from 'preact';
import { useContext } from 'preact/hooks';

interface IAppContext {
  env: string;
}

const AppContext: Context<IAppContext> = createContext({
  env: 'dev'
});

const withAppContext = (Component: any): any => {
  const WithConnectComponent = (props: any) => {
    const context = useContext(AppContext);
    const newProps = {
      ...props,
      ...context
    };

    return <Component {...newProps} />
  }

  return WithConnectComponent;
}

export {
  AppContext,
  withAppContext
};
