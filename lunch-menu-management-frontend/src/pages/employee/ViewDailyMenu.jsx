import { Col, Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import MenuCard from '../../components/common/MenuCard';
import MyModal from '../../components/common/MyModal';
import useAuth from '../../hooks/useAuth';
import { useAxios } from '../../hooks/useAxios';

// const items = [
//     {
//         "id": 2,
//         "date": "2024-05-26T18:00:00.000Z",
//         "option_name": "menu-2",
//         "description": "rice,fish,daal"
//     },
//     {
//         "id": 3,
//         "date": "2024-05-26T18:00:00.000Z",
//         "option_name": "menu-1",
//         "description": "rice,chicken,daal"
//     },
//     {
//         "id": 4,
//         "date": "2024-05-26T18:00:00.000Z",
//         "option_name": "menu-2",
//         "description": "rice,fish,daal"
//     }
// ]

const ViewDailyMenu = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const { auth } = useAuth()
    const { api } = useAxios()
    const [isConfirmChoiceModalOpen, setIsConfirmChoiceModalOpen] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState(false)
    const [allMenus, setAllMenus] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('https://office-lunch-menu-management-sage.vercel.app/api/v1/lunch-options')
            setAllMenus(response.data.data)
        }
        fetchData()
    }, [])

    const handleMenuChoice = (menu) => {
        console.log(menu)
        setSelectedMenu(menu)
        setIsConfirmChoiceModalOpen(true)
    }
    const handleConfirmChoice = async () => {
        const response = await api.post('https://office-lunch-menu-management-sage.vercel.app/api/v1/employee-choices', { "lunchoptionid": selectedMenu.id })
        if (response.status === 200) {
            setIsConfirmChoiceModalOpen(false)
            messageApi.open({
                type: 'success',
                content: 'Menu Added',
            });
        } else {
            console.log(response)
            messageApi.error({
                type: 'error',
                content: 'Some error occurred',
            });
            setIsConfirmChoiceModalOpen(false)
        }
    }


    const handleCancelConfirmChoice = () => {
        setIsConfirmChoiceModalOpen(false)
        setSelectedMenu({})
    }


    return (
        <>
            {contextHolder}
            <Row gutter={[16, 16]}>
                {
                    allMenus.length > 0 ? allMenus.map(item => <Col key={item.id} xs={24} sm={12} md={12} lg={12} xl={8}>
                        <MenuCard menu={item} handleMenuChoice={handleMenuChoice} />
                    </Col>) : <div>No data found!</div>
                }

            </Row>
            <MyModal isModalOpen={isConfirmChoiceModalOpen} handleOk={handleConfirmChoice} handleCancel={handleCancelConfirmChoice} title={"Confirm"}>
                Are you sure you want to choose this menu: <span className="font-bold">{selectedMenu.option_name} </span>
                containing: <span className="font-bold">{selectedMenu.description}</span> ?
            </MyModal>
        </>
    );
};

export default ViewDailyMenu;