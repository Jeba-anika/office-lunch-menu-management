import { Col, Row } from 'antd';
import React, { useState } from 'react';
import MenuCard from '../../components/common/MenuCard';
import MyModal from '../../components/common/MyModal';

const items = [
    {
        "id": 2,
        "date": "2024-05-26T18:00:00.000Z",
        "option_name": "menu-2",
        "description": "rice,fish,daal"
    },
    {
        "id": 3,
        "date": "2024-05-26T18:00:00.000Z",
        "option_name": "menu-1",
        "description": "rice,chicken,daal"
    },
    {
        "id": 4,
        "date": "2024-05-26T18:00:00.000Z",
        "option_name": "menu-2",
        "description": "rice,fish,daal"
    }
]

const ViewDailyMenu = () => {
    const [isConfirmChoiceModalOpen, setIsConfirmChoiceModalOpen] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState(false)


    const handleMenuChoice = (menu) => {
        console.log(menu)
        setSelectedMenu(menu)
        setIsConfirmChoiceModalOpen(true)
    }
    const handleConfirmChoice = () => {
        console.log(selectedMenu)
        setIsConfirmChoiceModalOpen(false)
    }
    const handleCancelConfirmChoice = () => {
        console.log(selectedMenu)
        setIsConfirmChoiceModalOpen(false)
        setSelectedMenu(null)
    }
    return (
        <>
            <Row gutter={[16, 16]}>
                {
                    items.map(item => <Col key={item.id} xs={24} sm={12} md={12} lg={12} xl={8}>
                        <MenuCard menu={item} handleMenuChoice={handleMenuChoice} />
                    </Col>)
                }

            </Row>
            <MyModal isModalOpen={isConfirmChoiceModalOpen} handleOk={handleConfirmChoice} handleCancel={handleCancelConfirmChoice} title={"Confirm"}>
                Are you sure you want to choose this menu: {selectedMenu.option_name}
                containing: {selectedMenu.description} ?
            </MyModal>
        </>
    );
};

export default ViewDailyMenu;