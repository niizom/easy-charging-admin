import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';

import sidebarLinks from './SidebarLinks';
import style from './Sidebar.module.scss';

function Sidebar() {
    const history = useHistory();
    const location = useLocation();

    const links = sidebarLinks.map(({ title, icon, path }) => ({
        key: path,
        icon: React.createElement(icon),
        label: title,
        onClick: () => history.push(path)
    }))

    return (
        <Layout.Sider trigger={null} collapsible width={280} className={style.backgroundWhite}>
            <Menu mode="inline" defaultSelectedKeys={[`${location.pathname}`]} items={links}/>
        </Layout.Sider>
    );
}

export default Sidebar;
