import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

export default function StoryForm() {
    const { mutate } = useMutation({
        mutationFn: async (values: any) => {
            await axios.post("http://localhost:3000/stories", values);
        },
        onError: () => {
            toast.error("ERROR!!!!");
        },
        onSuccess: () => {
            toast.success("SUCCESS!!!!");
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Title" name="title">
                <Input />
            </Form.Item>


            <Button htmlType="submit" type="primary">
                Submit
            </Button>

        </Form>
    );
}