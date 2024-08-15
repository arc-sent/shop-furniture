import React from 'react';
import { useContext, useEffect, useState } from "react"
import { FurnitureContext } from "../createContext";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ModalBacket from './componentHeader/ModalBacket';
import ModalPhone from './componentHeader/ModalPhone';
export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { furnitureItems, setFurnitureItems, active, setActive } = useContext(FurnitureContext);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [resultPrice, setResultPrice] = useState(0);
    const [price, setPrice] = useState([]);

    const [isModalPhone, setIsModalPhone] = useState(false);

    useEffect(() => {
        if (price.length === 0) {
            setResultPrice(0);
        }
        const totalPrice = price.reduce((acc, item) => acc + item.price, 0);
        setResultPrice(totalPrice);
    }, [price]);


    return (
        <>

            <div style={{
                position: 'fixed',
                background: '#fff',
                width: "100%",
                margin: '0px',
                top: '0',
                zIndex: '1000'
            }}>
                < div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: '22px 110px'
                }}>
                    <p className="LogoText">Shop furniture</p>
                    <div className='nav'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <p className={active === 0 ? 'navText active' : 'navText'}>Главная</p>
                        </Link>
                        <Link to='/about' style={{ textDecoration: 'none' }}>
                            <p className={active === 1 ? 'navText active' : 'navText'}>О нас</p>
                        </Link>
                        <p className='navText' onClick={()=>{
                            setIsModalPhone(true);
                        }}>Контакты</p>
                    </div>

                    <div style={{ cursor: 'pointer' }} onClick={() => setIsModalOpen(true)}>
                        <svg width="43" height="43" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.375 19.875H43.2392L35.0419 5.52966L31.2082 7.72033L38.1534 19.875H14.8467L21.7941 7.72033L17.9582 5.52966L9.76088 19.875H6.62504C6.28547 19.8749 5.95045 19.9532 5.64603 20.1036C5.34161 20.2541 5.076 20.4728 4.86983 20.7426C4.66367 21.0124 4.52251 21.3262 4.45733 21.6594C4.39214 21.9927 4.40469 22.3365 4.494 22.6641L10.6751 45.3305C10.9321 46.2641 11.488 47.0878 12.2578 47.6754C13.0276 48.2629 13.9688 48.5818 14.9372 48.5833H38.0651C40.0482 48.5833 41.8016 47.2473 42.3272 45.326L48.5083 22.6619C48.5982 22.3342 48.6111 21.9901 48.546 21.6566C48.4809 21.3231 48.3395 21.0091 48.133 20.7393C47.9264 20.4695 47.6603 20.251 47.3553 20.1011C47.0504 19.9512 46.7149 19.8738 46.375 19.875ZM38.0629 44.1667H14.9372L9.51796 24.2917H43.4821L38.0629 44.1667Z" fill="#FF2525" />
                            <path d="M19.875 28.7083H24.2917V39.75H19.875V28.7083ZM28.7083 28.7083H33.125V39.75H28.7083V28.7083Z" fill="#FF2525" />
                        </svg>
                    </div>
                </div >
            </div >
            {isModalOpen &&
                <ModalBacket
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                    setConfirmLoading={setConfirmLoading}
                    confirmLoading={confirmLoading}
                    resultPrice={resultPrice}
                    setResultPrice={setResultPrice}
                    price={price}
                    setPrice={setPrice}
                />
            }
            {
                isModalPhone &&
                <ModalPhone
                    isModalPhone={isModalPhone}
                    setIsModalPhone={setIsModalPhone}
                />
            }
        </>
    )
}