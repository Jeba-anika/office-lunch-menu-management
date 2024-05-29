import { Button, DatePicker, Form, Input, Space, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import MyModal from '../../components/common/MyModal';
const { TextArea } = Input;

const data = [
    {
        key: '1',
        id: 1,
        date: '2024-05-29',
        option_name: 'Menu-1',
        description: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        id: 2,
        date: '2024-05-27',
        option_name: 'Menu-2',
        description: 'London No. 1 Lake Park',
    }
];
const AdminMenuPage = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(false)

    const handleEditMenu = () => {
        setIsEditModalOpen(false);
    };
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
    };
    const handleDeleteMenu = () => {
        setIsConfirmDeleteModalOpen(false);
    };
    const handleDeleteCancel = () => {
        setIsConfirmDeleteModalOpen(false);
    };




    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Option Name',
            dataIndex: 'option_name',
            key: 'address',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => {
                        setIsEditModalOpen(true)
                        setSelectedMenu({ ...record, date: dayjs(record.date) })
                    }}>Edit</Button>
                    <Button type="primary" onClick={() => {
                        setIsConfirmDeleteModalOpen(true)
                        setSelectedMenu({ ...record, date: dayjs(record.date) })
                    }}>Delete</Button>
                </Space>
            ),
        },
    ];





    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const onDateChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>
            <Table columns={columns} dataSource={data} />

            {/* Edit modal */}
            <MyModal title={"Edit Menu"} handleOk={handleEditMenu} isModalOpen={isEditModalOpen} handleCancel={handleEditCancel}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={selectedMenu}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Menu Name"
                        name="option_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please provide a name for the menu!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Menu Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please provide a description for the menu!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>


                    <Form.Item
                        label="Date"
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: 'Please provide a date for the menu!',
                            },
                        ]}
                    >
                        <DatePicker />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </MyModal>


            {/* Delete modal */}
            <MyModal title={"Confirm Delete"} handleOk={handleDeleteMenu} isModalOpen={isConfirmDeleteModalOpen} handleCancel={handleDeleteCancel}>
                Are you sure you want to delete this menu: {selectedMenu.name}?
            </MyModal>
        </>
    )
}
export default AdminMenuPage;