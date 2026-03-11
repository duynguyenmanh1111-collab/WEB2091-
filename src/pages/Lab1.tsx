import { Layout, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

function Lab1() {
    const [open, setOpen] = useState(false);

    const users = [
        {
            key: "1",
            name: "Nguyễn Duy",
            email: "duy@gmail.com",
            role: "Admin",
        },
        {
            key: "2",
            name: "Nguyễn Nam",
            email: "nam@gmail.com",
            role: "User",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
        },
    ];

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider style={{ color: "white", padding: 20 }}>
                <h3 style={{ color: "white" }}>Sidebar</h3>
                <p>User</p>
                <p>Dashboard</p>
            </Sider>

            <Layout>
                <Header style={{ color: "white" }}>Dashboard</Header>

                <Content style={{ padding: 20 }}>
                    <h2>Form đăng ký</h2>

                    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                        <Form.Item label="Name" name="name">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password">
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                    <h2 style={{ marginTop: 40 }}>Danh sách user</h2>

                    <Button
                        type="primary"
                        style={{ marginBottom: 20 }}
                        onClick={() => setOpen(true)}
                    >
                        Add User
                    </Button>

                    <Table dataSource={users} columns={columns} />
                </Content>
            </Layout>

            <Modal
                title="Thêm user"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                <Form layout="vertical">
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Email">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Role">
                        <Input />
                    </Form.Item>

                    <Button type="primary">Add</Button>
                </Form>
            </Modal>
        </Layout>
    );
}

export default Lab1;