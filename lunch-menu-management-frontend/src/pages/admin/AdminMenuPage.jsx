import { Button, DatePicker, Form, Input, Space, Table, message } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import MyModal from '../../components/common/MyModal';
import { useAxios } from '../../hooks/useAxios';

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
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage()
    const { api } = useAxios()
    const [allMenus, setAllMenus] = useState([])
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState({
        date: new Date(),
        option_name: '',
        description: ''
    })

    const fetchData = async () => {
        const response = await api.get("http://localhost:5000/api/v1/lunch-options")
        if (response.status === 200) {
            const menus = response?.data?.data.map(item => { return { key: item.id, ...item } })
            setAllMenus(menus)
        }
    }

    useEffect(() => {

        fetchData()
    }, [])

    useEffect(() => {
        form.setFieldsValue({
            ...selectedMenu,
            date: dayjs(selectedMenu.date)
        });
    }, [selectedMenu, form]);



    const onFinish = async (values) => {

        const editedMenu = { ...values, date: new Date(values.date).toISOString() }
        const response = await api.put(`http://localhost:5000/api/v1/lunch-options/${selectedMenu.id}`, editedMenu)
        if (response.status === 200) {
            messageApi.open({
                type: 'success',
                content: 'Menu Edited',
            });
            fetchData()
            form.resetFields()
            setSelectedMenu({})
            setIsEditModalOpen(false)

        }
    };


    const handleEditMenu = () => {
        setIsEditModalOpen(false);
    };
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
        form.resetFields()

        setSelectedMenu({})
    };
    const handleDeleteMenu = async () => {
        const response = await api.delete(`http://localhost:5000/api/v1/lunch-options/${selectedMenu.id}`)
        if (response.status === 200) {
            fetchData()
            setSelectedMenu({})
            setIsConfirmDeleteModalOpen(false);
            messageApi.open({
                type: 'error',
                content: 'Menu Deleted',
            });

        } else {
            messageApi.open({
                type: 'error',
                content: 'Some error occurred',
            });
        }

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
            key: 'option_name',
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

                        console.log(record)
                        const data = { ...record, date: dayjs(record.date) }
                        console.log(data)
                        setSelectedMenu(data)
                        setIsEditModalOpen(true)
                    }}>Edit</Button>
                    <Button type="primary" onClick={() => {
                        setSelectedMenu({ ...record, date: dayjs(record.date) })
                        setIsConfirmDeleteModalOpen(true)
                    }}>Delete</Button>
                </Space>
            ),
        },
    ];






    return (
        <>
            {contextHolder}
            <Table columns={columns} dataSource={allMenus} />

            {/* Edit modal */}
            <MyModal title={"Edit Menu"} footer={null} handleOk={handleEditMenu} isModalOpen={isEditModalOpen} handleCancel={handleEditCancel}>
                <Form
                    form={form}
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
                Are you sure you want to delete this menu: {selectedMenu.option_name}?
            </MyModal>
        </>
    )
}
export default AdminMenuPage;