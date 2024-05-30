import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
const data = [
    {
        key: '1',
        id: 1,
        choice_date: '2024-05-29',
        email: 'abc2@gmail.com',
        option_name: 'Menu-1',
    },
    {
        key: '2',
        id: 2,
        choice_date: '2024-05-27',
        email: 'abc2@fmail.com',
        option_name: 'Menu-2',
    }
];

const ViewAllEmployeeChoices = () => {
    const { api } = useAxios()
    const [allEmployeeChoices, setAllEmployeeChoices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("https://office-lunch-menu-management-sage.vercel.app/api/v1/employee-choices")
            console.log(response)
            if (response.status === 200) {
                setAllEmployeeChoices(response.data.data)
            }
        }
        fetchData()
    }, [])
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Selected Menu',
            dataIndex: 'option_name',
            key: 'option_name',
        },
        {
            title: 'Choice Date',
            dataIndex: 'choice_date',
            key: 'choice_date',
        }
    ];
    return (
        <Table columns={columns} dataSource={allEmployeeChoices} />
    );
};

export default ViewAllEmployeeChoices;