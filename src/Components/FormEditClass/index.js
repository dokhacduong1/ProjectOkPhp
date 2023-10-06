import { Button, Card, Col, Form, Input, Modal, Row, message } from "antd";
import { useState } from "react";
import { EditOutlined } from '@ant-design/icons';

import { updateDataClass } from "../../Services/class";

function FormEditClass(props) {
    
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
            id:record.id
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
    return (

        <>
            {contextHolder}
            <EditOutlined
                onClick={() => {
                    handleShowModal();
                }}
            />
            <Modal
                title="Chỉnh Sửa Lớp"
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
                                        <h3 style={{ textAlign: "center" }}> Chỉnh Sửa Lớp</h3>
                                        <Form.Item
                                            label="Lớp"
                                            name="name_class"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Vui Lòng Nhập Tên Lớp",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Tên Lớp"
                                                className="editSourceShop__form-input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Giáo Viên Cố Vấn"
                                            name="teacher_advisor"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Vui Lòng Nhập Tên Giáo Viên",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Tên Giáo Viên"
                                                className="editSourceShop__form-input"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="faculty"
                                            label="Khoa"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Vui Lòng Nhập Tên Khoa",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Tên Khoa"
                                                className="editSourceShop__form-input"
                                            />
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
export default FormEditClass