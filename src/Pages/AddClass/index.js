import { Button, Card, DatePicker, Form, Input, Switch, message } from "antd";


import { convertToCustomDateFormat } from "../../helpers/dataTime";
import { addDataClass } from "../../Services/class";



function AddClass() {

    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const handleFinish = async (infoForm) => {
        try {
            await addDataClass(infoForm);
            form.resetFields();
            messageApi.open({
                type: "success",
                content: `Thêm Thành Công Class ${infoForm.name_class}`,
            });
        } catch {
            messageApi.open({
                type: "error",
                content: `Vui Lòng Thêm Lại`,
            });
        }
       
    };

    return (
        <>
            {contextHolder}
            <Card className="students">
                <Form onFinish={handleFinish}
              
                 form={form}>
                    
                    <Form.Item
                        name="name_class"
                        label="Tên Lớp"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Nhập Tên Lớp!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Tên Lớp"
                           
                        />
                    </Form.Item>
                    <Form.Item
                        name="teacher_advisor"
                        label="Giáo Viên Cố Vấn"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Nhập Giáo Viên Cố Vấn",
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="faculty"
                        label="Khoa"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Nhập Khoa",
                            
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                  
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login__form-button"
                        >
                            Thêm Lớp
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}
export default AddClass;
