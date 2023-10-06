import { Button, Card, Form, Input, Popconfirm, Select, Table, Tag } from "antd";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
    UserAddOutlined,
    SearchOutlined,
    ReloadOutlined,
} from "@ant-design/icons";

// import FormEditStudents from "../../Components/FormEditStudents";
import { deleteDataStudents, getDataStudents } from "../../Services/Students";
import { deleteDataClass, getDataClass } from "../../Services/class";
import FormEditClass from "../../Components/FormEditClass";
import FormEditStudent from "../../Components/FormEditStudent";


function StudentsManagement() {

    const [dataSource, setDataSource] = useState([]);

    const [tempDataSource, setTempDataSource] = useState([]);
    const [deleteId, setDeleteId] = useState([]);
    const fetchApi = async () => {
        const dataStudent = await getDataStudents() || [];
       
     
        setDataSource(dataStudent)
        setTempDataSource(dataStudent)

    };
    const optionsSelect = [
        {
            value: "name_class",
            label: "Lớp",
        },
        {
            value: "name_student",
            label: "Tên Sinh Viên",
        }
    ];
    useEffect(() => {
        fetchApi();
    }, []);

    const handeleDelete = async () => {
        if (deleteId.length > 0) {
            deleteId.map(async (dataMap) => {
                const objectId = { id: dataMap.id }
                await deleteDataStudents(objectId);
                fetchApi()
            })
        }
    };
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setDeleteId(selectedRows);
        },
    };
    //Hàm này search dùng biến temDataSource để tìm cái này cho phép ta lấy dữ liệu lưu chữ tạm thời để tìm kiếm xong set vào DataSource Chính
    const handleForm = async (valueForm) => {
        if (valueForm.select !== "all") {
            //Hàm này convert hai cái về chữ thường xong check
            const dataDocAllCategorys = tempDataSource.filter((dataFilter) =>
                dataFilter[valueForm.select]
                    .toLowerCase()
                    .includes(valueForm.keyword.toLowerCase())
            );
            setDataSource(dataDocAllCategorys);
        } else {
            setDataSource(tempDataSource);
        }
    };
    const columns = [
        {
            title: "Lớp",
            dataIndex: "name_class",
            key: "name_class",
            align: "center",
        },
        {
            title: "Tên Sinh Viên",
            dataIndex: "name_student",
            key: "name_student",
            align: "center",
        },
        {
            title: "Ngày Sinh",
            dataIndex: "date_of_birth",
            key: "date_of_birth",
            align: "center",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            align: "center",
        },
        {
            title: "Hành Động",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <>
                    <div className="sourceShopManagement__table-iconAction">
                        <span
                            style={{
                                color: "rgb(0, 150, 45)",
                                border: "1px solid rgb(0, 150, 45)",
                                borderRadius: "4px",
                            }}
                        >
                            <FormEditStudent record={record} fetchApiLoad={fetchApi} />
                        </span>
                    </div>
                </>
            ),
            align: "center",
        },
    ];

    return (
        <>{
           
                <Card>
                    <Form
                        style={{ textAlign: "center" }}
                        className="search__welcome-form"
                        layout="inline"
                        rules={{
                            remember: true,
                        }}
                        onFinish={handleForm}
                    >
                        <Form.Item
                            className="search__welcome-item"
                            name="select"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui Lòng Chọn ",
                                },
                            ]}
                        >
                            <Select
                                options={optionsSelect}
                                style={{ width: 170 }}
                                placeholder="Tìm Kiếm"
                                className="search__welcome-form-select"
                            />
                        </Form.Item>
                        <Form.Item name="keyword" className="search__welcome-item">
                            <Input
                                style={{ width: 230 }}
                                className="search__welcome-form-input"
                                placeholder="Nhập Từ Khóa..."
                            />
                        </Form.Item>

                        <Form.Item className="search__welcome-item">
                            <Button
                                className="search__welcome-form-button"
                                type="primary"
                                htmlType="submit"
                            >
                                <SearchOutlined /> Search
                            </Button>
                        </Form.Item>
                        <Button
                            className="search__welcome-form-button"
                            type="primary"
                            onClick={() => {
                                handleForm({ select: "all" });
                            }}
                        >
                            <ReloadOutlined /> Reset
                        </Button>

                        <Link style={{ padding: "10px" }} to={"/add-class"}><Button>Thêm Lớp</Button></Link>

                    </Form>
                    {deleteId.length > 0 && (
                        <>
                            <span
                                style={{
                                    color: "red",

                                    borderRadius: "4px",
                                    padding: "5px",
                                }}
                            >
                                <Popconfirm
                                    title="Xóa Shop Nguồn"
                                    description="Bạn Có Muốn Xóa Những Sinh Viên Này Không ?"
                                    okText="Ok"
                                    cancelText="No"
                                    onConfirm={() => {
                                        handeleDelete();
                                    }}
                                >
                                    <span style={{ fontSize: "20px", cursor: "pointer" }}>Xóa</span>
                                </Popconfirm>
                            </span>
                        </>
                    )}
                    {
                        dataSource.length > 0 && (
                            <Table
                                rowSelection={{
                                    type: "checkbox",
                                    ...rowSelection,
                                }}
                                rowKey="id"
                                dataSource={dataSource}
                                columns={columns}
                            />
                        )
                    }
                </Card>
           
        }

        </>
    );
}
export default StudentsManagement;