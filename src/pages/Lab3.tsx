import { Form, Input, Button, List, Card } from "antd";
import { useState } from "react";

const Lab3 = ({ mode }: any) => {
    const [products, setProducts] = useState<any[]>([]);

    const onLogin = (values: any) => {
        console.log("Login:", values);
    };

    const onAddProduct = (values: any) => {
        setProducts([...products, values]);
    };

    const handleDelete = (index: number) => {
        const newList = products.filter((_, i) => i !== index);
        setProducts(newList);
    };

    return (
        <div style={{ padding: 40 }}>

            {mode === "login" && (
                <Card title="Login Form" style={{ maxWidth: 400 }}>
                    <Form layout="vertical" onFinish={onLogin}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Vui lòng nhập email" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Vui lòng nhập password" }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form>
                </Card>
            )}

            {mode === "product" && (
                <>
                    <Card title="Thêm sản phẩm" style={{ marginBottom: 30, maxWidth: 400 }}>
                        <Form layout="vertical" onFinish={onAddProduct}>
                            <Form.Item
                                label="Tên sản phẩm"
                                name="name"
                                rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Giá"
                                name="price"
                                rules={[{ required: true, message: "Nhập giá" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Button type="primary" htmlType="submit">
                                Thêm
                            </Button>
                        </Form>
                    </Card>

                    <Card title="Danh sách sản phẩm">
                        <List
                            bordered
                            dataSource={products}
                            renderItem={(item, index) => (
                                <List.Item
                                    actions={[
                                        <Button danger onClick={() => handleDelete(index)}>
                                            Xóa
                                        </Button>,
                                    ]}
                                >
                                    {item.name} - {item.price}
                                </List.Item>
                            )}
                        />
                    </Card>
                </>
            )}
        </div>
    );
};

export default Lab3;