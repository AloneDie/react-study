import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteConfig } from './route-conf';

const FallbackComponent: React.FC = () => {
  return <div className="muse-comp-loading">...</div>;
};

const LazyComp: React.FC<{
  componentFuture: any;
  id: string;
}> = ({ componentFuture }) => {
  const InnerLazyComp = React.lazy(componentFuture);
  return (
    <Suspense fallback={<FallbackComponent />}>
      <InnerLazyComp />
    </Suspense>
  );
};

const RouterCard: React.FC = () => {
  return (
    <Switch>
      {RouteConfig.map(({ component, path, id }) => {
        const lazyComp = <LazyComp componentFuture={component} id={id} />;
        return (
          <Route key={id} path={path}>
            <div className="page-container">{lazyComp}</div>
          </Route>
        );
      })}
    </Switch>
  );
};

export default RouterCard;
