import { Table } from "antd";

function Lab2() {
    const data = [
        {
            key: "1",
            id: 1,
            name: "Nguyễn Duy",
            age: 20,
            major: "IT",
        },
        {
            key: "2",
            id: 2,
            name: "Trần Nam",
            age: 21,
            major: "Software Engineering",
        },
    ];

    const columns = [
        { title: "ID", dataIndex: "id" },
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" },
        { title: "Major", dataIndex: "major" },
    ];

    return <Table columns={columns} dataSource={data} />;
}

export default Lab2;