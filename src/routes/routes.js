import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const EmptyLayout = React.lazy(() => import('../layouts/EmptyLayout'));

const AdminsList = React.lazy(() => import('../pages/AdminsList'));
const Login = React.lazy(() => import('../pages/Login'));
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

// for authenticated users
const privateRoutes = [
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: AdminsList
    },
    {
        path: '/login',
        exact: true,
        layout: EmptyLayout,
        component: Login
    },
    {
        path: '/404',
        exact: true,
        layout: EmptyLayout,
        component: NotFound
    },
    {
        path: '*',
        exact: true,
        layout: EmptyLayout,
        component: () => <Redirect to="/404" />
    }
];
// for not authenticated users
const publicRoutes = [
    {
        path: '/login',
        exact: true,
        layout: EmptyLayout,
        component: Login
    },
    {
        path: '*',
        exact: true,
        layout: EmptyLayout,
        component: () => <Redirect to="/login" />
    }
];

const Routes = () => {
    const token = useSelector(state => state?.auth?.token);

    const privateRoutesList = privateRoutes.map((item, id) => {
        return <AppRoute key={id} exact path={item.path} layout={item.layout} component={item.component} />;
    });

    const publicRoutesList = publicRoutes.map((item, id) => {
        return <AppRoute key={id} exact path={item.path} layout={item.layout} component={item.component} />;
    });

    return (
        <Switch>
            {token ? privateRoutesList : publicRoutesList}
        </Switch>
    );
};

export default withRouter(Routes);
