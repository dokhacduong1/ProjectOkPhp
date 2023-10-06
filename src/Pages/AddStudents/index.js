import { Button, Card, DatePicker, Form, Input, Select, Switch, message } from "antd";
import "./AddStudents.scss"

import { convertToCustomDateFormat } from "../../helpers/dataTime";
import { useEffect, useState } from "react";
import { getDataClass } from "../../Services/class";
import { addDataStudents } from "../../Services/Students";

function AddStudents() {
    const [dataClass, setDataClass] = useState([]);
  
    const fetchApi = async () => {
        const dataClass = await getDataClass() || [];
        const convertData = dataClass.map(dataMap=>({label:dataMap.name_class,value:dataMap.id}))
        setDataClass(convertData)
    };
    useEffect(() => {
        fetchApi();
    }, []);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const handleFinish = async (infoForm) => {
        infoForm.sex === true ? infoForm.sex =1 : infoForm.sex =0;
        infoForm.date_of_birth = convertToCustomDateFormat(infoForm.date_of_birth)
        infoForm.classes_id = parseInt(infoForm.classes_id);
        try {
            await addDataStudents(infoForm)
            form.resetFields();
            messageApi.open({
                type: "success",
                content: `Thêm Thành Công Sinh Viên ${infoForm.name_student}`,
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
                initialValues ={{sex:true}}
                 form={form}>
                    
                    <Form.Item
                        name="name_student"
                        label="Tên Sinh Viên"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Nhập Tên Sinh Viên!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Tên Sinh Viên"
                           
                        />
                    </Form.Item>
                    <Form.Item
                        name="date_of_birth"
                        label="Ngày Sinh"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Nhập Ngày Sinh",
                            },
                        ]}
                    >
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Nhập Email",
                                type:"email"
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="classes_id"
                        label="Lớp"
                        rules={[
                            {
                                required: true,
                                message: "Vui Lòng Chọn Lớp",
                               
                            },
                        ]}
                    >
                        <Select options={dataClass} defaultValue={"-- Vui Lòng Chọn --"}/>
                    </Form.Item>
                    <Form.Item
                        name="sex"
                        label="Giới Tính"
                       
                    >
                        <Switch checkedChildren="Nam" unCheckedChildren = "Nữ" defaultChecked/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login__form-button"
                        >
                            Thêm Danh Mục
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}
export default AddStudents;
