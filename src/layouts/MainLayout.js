import React from 'react';
import { Layout } from 'antd';

import Header from '../containers/Header';
import Sidebar from '../containers/Sidebar';

function MainLayout({ children }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Layout>
                <Sidebar />
                <Layout style={{ padding: 22 }}>
                    {children}
                </Layout>
            </Layout>
        </Layout>
    );
}

export default MainLayout;
