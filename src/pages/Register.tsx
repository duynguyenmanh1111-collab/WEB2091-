import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export default function Register() {
    const setUser = useAuthStore((state) => state.setUser);

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.post(
                "http://localhost:3000/register",
                values
            );
            return res.data;
        },

        onSuccess: (data: any) => {
            // 🔥 auto login sau khi register
            setUser({
                name: data.user.username,
                avatar: "",
            });

            message.success("Đăng ký thành công & đã đăng nhập!");
        },

        onError: () => {
            message.error("Đăng ký thất bại!");
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={isPending} block>
                    Register
                </Button>
            </Form>
        </div>
    );
}