import React from 'react';
import { useQuery } from 'react-query';
import { Button, Card, Empty, Menu, Spin } from 'antd';

import requests from '../../services/requests';
import style from './Categories.module.scss';

function Categories() {
    const { data, isLoading } = useQuery('getAllCategories', requests.categories.getAll);
    const categories = data?.data?.items;

    return (
        <Card style={{ height: '100%' }} title="Categories" extra={<Button type="primary">Add Category</Button>}>
            {!isLoading && !data && <Empty />}
            {!data && isLoading && (
                <div className="centerElement">
                    <Spin />
                </div>
            )}
            {!isLoading && categories && (
                <Menu
                    className={style.menu}
                    mode="inline"
                    items={categories.map(({ name, id, children }) => ({
                        label: name,
                        key: id,
                        children: children.map(({ name, id }) => ({
                            key: id,
                            label: name
                        }))
                    }))}
                />
            )}
        </Card>
    );
}

export default Categories;
