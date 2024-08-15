import { useContext, useEffect, useState } from "react"
import React from "react";
import { Button, Modal } from 'antd';
import { FurnitureContext } from "../../createContext";
import { FakeFetch } from "../../fakeFetch";
import CardBacket from "./CardBasket";

export default function ModalBacket(props) {

    const { setFurnitureItems, furnitureItems } = useContext(FurnitureContext);

    let styleOkButtonProps =  props.resultPrice > 1 ? { backgroundColor: '#FF2525', color: 'white' } : { display: 'none' }
    const handleOk = () => {
        props.setConfirmLoading(true)
        FakeFetch(furnitureItems, props.resultPrice).then(result => {
            props.setIsModalOpen(false);
            props.setConfirmLoading(false)
            setFurnitureItems([]);
            props.setResultPrice(0)
            console.log(result)
        })
    };
    const handleCancel = () => {
        props.setIsModalOpen(false);
    };

    return (<Modal
        title="Корзина"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: styleOkButtonProps }}
        cancelButtonProps={{ style: { backgroundColor: '#FF2525', color: 'white' } }}
        okText='Купить'
        cancelText='Закрыть'
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
        confirmLoading={props.confirmLoading}
    >
        <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            <div>
                {furnitureItems.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <CardBacket obj={item} setPrice={props.setPrice} price={props.price} />
                        </React.Fragment>
                    );
                })}
                {props.resultPrice > 0
                    ?
                    <p style={{
                        fontWeight: '600',
                        fontSize: '25px',
                        color: '#0abe06',
                        margin: '0',
                        textAlign: 'end'
                    }
                    }>{props.resultPrice}$</p>
                    :
                    <p>Ваша корзина пустая!</p>
                }

            </div>
        </div>
    </Modal>)
}