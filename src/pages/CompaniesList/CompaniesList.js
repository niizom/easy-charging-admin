import React from 'react';
import { useQuery } from 'react-query';
import { Button, Card, List, Avatar, Typography, Spin } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import requests from '../../services/requests';

function CompaniesList() {
    const { data, isError } = useQuery('allCompanies', requests.companies.getAll);
    const companies = data?.data?.items;

    return (
        <Card style={{ height: '100%' }} title="Companies" extra={<Button type="primary">Add Company</Button>}>
            {companies && !isError ? (
                <List
                    itemLayout="horizontal"
                    dataSource={companies}
                    renderItem={item => (
                        <List.Item
                            actions={[<Button icon={<EditOutlined />} />, <Button danger icon={<DeleteOutlined />} />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.image}>{item.name[0]}</Avatar>}
                                title={<Typography.Text>{item.name}</Typography.Text>}
                                description={item.director}
                            />
                        </List.Item>
                    )}
                />
            ) : (
                <Spin size="large" />
            )}
        </Card>
    );
}

export default CompaniesList;
