import React from 'react';
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
        <Table columns={columns} dataSource={data} />
    );
};

export default ViewAllEmployeeChoices;