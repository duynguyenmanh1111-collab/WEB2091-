import { Table, Button, Tag } from "antd";
import { useState } from "react";

function Lab2() {

    const [data, setData] = useState([
        {
            key: "1",
            id: 1,
            name: "Nguyễn Duy",
            email: "duy@gmail.com",
            age: 20,
            major: "IT",
            price: 20000,
            category: "Electronics",
            status: "active",
        },
        {
            key: "2",
            id: 2,
            name: "Nguyễn Văn B",
            email: "b@gmail.com",
            age: 21,
            major: "Marketing",
            price: 15000,
            category: "Electronics",
            status: "inactive",
        },
        {
            key: "3",
            id: 3,
            name: "Trần Văn A",
            email: "a@gmail.com",
            age: 19,
            major: "Design",
            price: 5000,
            category: "Furniture",
            status: "active",
        },
        {
            key: "4",
            id: 4,
            name: "Lê Văn C",
            email: "c@gmail.com",
            age: 22,
            major: "Hotel",
            price: 2000,
            category: "Furniture",
            status: "inactive",
        },
    ]);

    const deleteItem = (key: string) => {
        setData(data.filter((item) => item.key !== key));
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Major",
            dataIndex: "major",
        },
        {
            title: "Price",
            dataIndex: "price",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status: string) =>
                status === "active" ? (
                    <Tag color="green">active</Tag>
                ) : (
                    <Tag color="red">inactive</Tag>
                ),
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <>
                    <Button type="primary" style={{ marginRight: 10 }}>
                        Edit
                    </Button>

                    <Button danger onClick={() => deleteItem(record.key)}>
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <>
            <h2>Danh sách</h2>

            <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 3 }}
            />
        </>
    );
}

export default Lab2;