import { Button, Modal } from 'antd';
export default function ModalPhone(props) {

    const handleOkPhone = () => {
        props.setIsModalPhone(false);
    };
    const handleCancelPhone = () => {
        props.setIsModalPhone(false);
    };
    return (
        <Modal
            title="Контакты"
            open={props.isModalPhone}
            onOk={handleOkPhone}
            onCancel={handleCancelPhone}
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { backgroundColor: '#FF2525', color: 'white' } }}
            cancelText='Закрыть'
        >
            <h1 className='HeaderModal'>Нажми, чтобы позвонить!</h1>
            <div style={{display: 'flex' , flexDirection: 'column'}}>
                <a className="numModal" href="tel:+7(978)-999-99-00">+7(978)-999-99-00</a>
                <a className="numModal" href="tel:+7(978)-888-99-12">+7(978)-888-99-12</a>
            </div>
        </Modal>

    )
}