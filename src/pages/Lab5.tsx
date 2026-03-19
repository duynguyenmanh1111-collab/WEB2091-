import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function StoryList() {
    const [search, setSearch] = useState("");

    const { data, isLoading, isError } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });

    const qc = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`http://localhost:3000/stories/${id}`);
        },
        onSuccess: () => {
            toast.success("Xoa truyen thanh cong");
            qc.invalidateQueries({ queryKey: ["stories"] });
        },
    });


    const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const columns = [
        {
            title: "STT",
            key: "stt",
            render: (_text: any, _record: any, index: number) => index + 1,
        },
        {
            title: "Tên Truyện",
            dataIndex: "title",
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "Hình ảnh",
            dataIndex: "image",
            render: (src: string) => <Image src={src} height={100} />,
        },
        {
            title: "Ngày Tháng",
            dataIndex: "createdAt",
            render: (date: string) => {
                const d = new Date(date);
                const day = String(d.getDate()).padStart(2, "0");
                const month = String(d.getMonth() + 1).padStart(2, "0");
                const year = d.getFullYear();
                return `${day}/${month}/${year}`;
            },
        },
        {
            title: "Hành động",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Delete the story"
                    description="Are you sure to delete this story?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => mutate(record.id)}
                >
                    <Button danger>Xóa Truyện</Button>
                </Popconfirm>
            ),
        },
    ];

    if (isError) {
        return <div>Co loi xay ra</div>;
    }

    return (
        <>

            <Input
                placeholder="Tìm kiếm theo tên truyện..."
                style={{ marginBottom: 16, width: 300 }}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Table
                columns={columns}
                dataSource={filteredData}
                loading={isLoading}
                pagination={{
                    pageSize: 5,
                }}
            />
        </>
    );
}