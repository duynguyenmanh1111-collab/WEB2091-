import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export default function Login() {
    const setUser = useAuthStore((state) => state.setUser);

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.post(
                "http://localhost:3000/login",
                values
            );
            return res.data;
        },

        onSuccess: (data: any) => {
            setUser({
                name: data.user.username,
                avatar: "",
            });

            message.success("Đăng nhập thành công!");
        },

        onError: () => {
            message.error("Sai tài khoản hoặc mật khẩu!");
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={isPending} block>
                    Login
                </Button>
            </Form>
        </div>
    );
}