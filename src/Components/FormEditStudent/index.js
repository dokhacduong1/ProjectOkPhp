import { Button, Card, Col, DatePicker, Form, Input, Modal, Row, Switch, message } from "antd";
import { useState } from "react";
import { EditOutlined } from '@ant-design/icons';

import { updateDataClass } from "../../Services/class";

function FormEditStudent(props) {

    const { record, fetchApiLoad } = props;
    const [isModal, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const handleShowModal = () => {
        form.resetFields();
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };
    const handleStudents = async (valueForm) => {
        const objectNew = {
            ...valueForm,
            id: record.id
        }
        console.log(objectNew)
        try {
            await updateDataClass(objectNew)
            messageApi.open({
                type: 'success',
                content: 'Sửa Giữ Liệu Thành Công',
            });
            setIsModalOpen(false);
            fetchApiLoad()
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Vui Lòng Sửa Lại',
            });
        }



    }
    console.log(record)
    return (

        <>
            {contextHolder}
            <EditOutlined
                onClick={() => {
                    handleShowModal();
                }}
            />
            <Modal
                title="Chỉnh Sửa Sinh Viên"
                open={isModal}
                onCancel={handleCancel}
                footer={null}
            >
                <Card className="editSourceShop">
                    <Row gutter={20}>
                        <Col className="editSourceShop__form" span={24}>
                            {record && (
                                <>
                                    <Form
                                        form={form}

                                        rules={{
                                            remember: true,
                                        }}
                                        layout="vertical"
                                        onFinish={handleStudents}
                                        initialValues={record}
                                    >
                                        <h3 style={{ textAlign: "center" }}> Chỉnh Sửa Sinh Viên</h3>
                                        <Form.Item
                                            label="Tên Sinh Viên"
                                            name="name_student"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Vui Lòng Nhập Tên Sinh Viên",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Tên Sinh Viên"
                                                className="editSourceShop__form-input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Ngày Sinh"
                                            name="date_of_birth"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Vui Lòng Chọn Ngày Sinh",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Vui Lòng Nhập Tên Khoa",
                                                    type: "email"
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Tên Khoa"
                                                className="editSourceShop__form-input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="sex"
                                            label="Giới Tính"

                                        >
                                            <Switch checkedChildren="Nam" unCheckedChildren="Nữ" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="login__form-button"
                                            >
                                                Sửa Lớp
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </>
                            )}
                        </Col>
                    </Row>
                </Card>
            </Modal>
        </>
    )
}
export default FormEditStudent