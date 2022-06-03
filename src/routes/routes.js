import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const EmptyLayout = React.lazy(() => import('../layouts/EmptyLayout'));

const AdminsList = React.lazy(() => import('../pages/AdminsList'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);

const privateRoutes = [
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: AdminsList
    },
    {
        path: '/404',
        exact: true,
        layout: EmptyLayout,
        component: NotFound
    }
];
const publicRoutes = [
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: AdminsList
    },
    {
        path: '/404',
        exact: true,
        layout: EmptyLayout,
        component: NotFound
    }
];

const Routes = () => {
    const publicRouteList = publicRoutes.map((item, id) => {
        return <AppRoute key={id} exact path={item.path} layout={item.layout} component={item.component} />;
    });

    return (
        <Switch>
            {publicRouteList}
            <Redirect from="*" to="/404" />
        </Switch>
    );
};

export default withRouter(Routes);
