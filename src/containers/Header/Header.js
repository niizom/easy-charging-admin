import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import requests from '../../services/requests';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/slicers/auth';
import { removePersistedData } from '../../redux/persistor';

import { Layout, Divider, Button, Modal } from 'antd';
import { ExclamationCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import style from './Header.module.scss';

function Header() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { mutate } = useMutation(requests.auth.logout, {
        onSuccess: () => {
            dispatch(signOut());
            removePersistedData();
            history.push('/login');
        }
    });

    const confirmModal = () => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to exit?',
            okText: 'Yes',
            cancelText: 'No',
            onOk: () => mutate({})
        });
    };

    return (
        <Layout.Header className={style.backgroundWhite}>
            <div className={style.header}>
                <div className={style.logo}>Easy Charging</div>
                <Button onClick={confirmModal} icon={<LogoutOutlined />}>
                    Log out
                </Button>
            </div>
            <Divider className={style.divider} />
        </Layout.Header>
    );
}

export default Header;
