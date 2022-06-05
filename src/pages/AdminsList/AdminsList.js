import React from 'react';
import { Button, Card } from "antd";

function AdminsList() {
    return (
        <Card style={{ height: '100%' }} title="Admins" extra={<Button type="primary">Add Admin</Button>}>
            Admins List
        </Card>
    )
};

export default AdminsList;
