import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

export default function StoryForm() {
    const { mutate, isSuccess, isPending } = useMutation({
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

    const onFinish = async (values: any) => {
        console.log("Success:", values);


        const newValues = {
            ...values,
            createdAt: new Date().toISOString(),
        };

        mutate(newValues);
    };

    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Title" name="title">
                <Input />
            </Form.Item>

            <Form.Item label="Author" name="author">
                <Input />
            </Form.Item>

            <Form.Item label="Category" name="category">
                <Select
                    placeholder="Chọn danh mục"
                    options={[
                        { label: "Truyện hot", value: "hot" },
                        { label: "Truyện hài", value: "comedy" },
                        { label: "Truyện kinh dị", value: "horror" },
                        { label: "Truyện Việt Nam", value: "vietnam" },
                    ]}
                />
            </Form.Item>

            <Form.Item label="Image" name="image">
                <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
                <Input.TextArea />
            </Form.Item>

            <Button htmlType="submit" loading={isPending} type="primary">
                Submit
            </Button>

            {isSuccess && <p>Story submitted successfully!</p>}
        </Form>
    );
}