import React from 'react';
import { Layout, Menu, Modal } from 'antd';
import { LogoutOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import sidebarLinks from './SidebarLinks';
import style from './Sidebar.module.scss';

function Sidebar() {
    const confirmModal = () => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to exit?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => {
                console.log('confirmed');
            }
        });
    };

    const links = sidebarLinks.map(({ title, icon, path }) => ({
        key: path,
        icon: React.createElement(icon),
        label: title
    }))
    links.push({
        key: 'logout',
        icon: React.createElement(LogoutOutlined),
        label: 'Logout',
        onClick: confirmModal
    })

    return (
        <Layout.Sider trigger={null} collapsible width={280} className={style.backgroundWhite}>
            <Menu mode="inline" defaultSelectedKeys={[`/`]} items={links}/>
        </Layout.Sider>
    );
}

export default Sidebar;
