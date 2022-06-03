import React from 'react';
import { Layout, Divider } from 'antd';
import style from './Header.module.scss';

function Header() {
    return (
        <Layout.Header className={style.backgroundWhite}>
            <Divider className={style.divider} />
        </Layout.Header>
    );
}

export default Header;
