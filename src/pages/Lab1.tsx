import { Layout, Form, Input, Button, Table } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function Lab1() {
    const onFinish = (values: any) => {
        console.log(values);
    };

    const data = [
        {
            key: "1",
            name: "Duy",
            email: "duy@gmail.com",
            role: "Admin",
        },
        {
            key: "2",
            name: "Nam",
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

    return (
        <Layout style={{ minHeight: "100vh" }}>

            <Sider style={{ color: "white", padding: 20 }}>
                <h3>Sidebar</h3>
                <p>Dashboard</p>
                <p>User</p>
            </Sider>

            <Layout>

                <Header style={{ color: "white" }}>
                    <h2 style={{ color: "white" }}>Header</h2>
                </Header>


                <Content style={{ padding: 20 }}>
                    <div>
                        <h2>Form đăng ký</h2>

                        <Form onFinish={onFinish}>
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
                    </div>

                    <div style={{ marginTop: 40 }}>
                        <h2>Danh sách User</h2>

                        <Button type="primary" style={{ marginBottom: 20 }}>
                            Add User
                        </Button>

                        <Table dataSource={data} columns={columns} />
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>Lab1 React Antd</Footer>
            </Layout>
        </Layout>
    );
}

export default Lab1;