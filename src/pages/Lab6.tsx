import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function EditStory() {
    const { id } = useParams();
    const [form] = Form.useForm();

    const { data } = useQuery({
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
        queryKey: ["story", id],
        enabled: !!id,
    });

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const onFinish = async (values: any) => {
        try {
            await axios.put(`http://localhost:3000/stories/${id}`, values);
            message.success("Cập nhật thành công!");
        } catch (error) {
            message.error("Lỗi khi cập nhật dữ liệu!");
        }
    };

    return (
        <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
                label="Ten truyen"
                name="title"
                rules={[{ required: true, message: 'Vui lòng nhập tên truyện!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tac gia"
                name="author"
                rules={[{ required: true, message: 'Vui lòng nhập tên tác giả!' }]}
            >
                <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
    );
}