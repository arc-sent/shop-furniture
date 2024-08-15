import { useContext, useEffect } from "react";
import { FurnitureContext } from "../../createContext";

export default function CardBacket({ obj, setPrice }) {

    const { setFurnitureItems } = useContext(FurnitureContext);
    const priceCard = obj.counter * obj.price
    useEffect(() => {
        if (obj.counter === 0) {
            setPrice((items) => {
                return items.filter(item => item.id !== obj.id)
            })
        } else {
            setPrice((items) => {
                const existingItem = items.find(item => item.id === obj.id);
                if (existingItem) {
                    return items.map((item) =>
                        item.id === obj.id ? { ...item, price: priceCard } : item
                    );
                } else {
                    return [...items, { id: obj.id, price: priceCard }];
                }
            });
        }

    }, [priceCard, setPrice, obj.id, priceCard]);


    function handleClickIncrement(id) {
        setFurnitureItems(prevItems => {
            return prevItems.map(item =>
                item.id === id ? { ...item, counter: item.counter + 1 } : item
            );
        });
    }

    function handleClickDicrincrement(id) {
        setFurnitureItems(prevItems => {
            return prevItems.map(item =>
                item.id === id ? { ...item, counter: Math.max(0, item.counter - 1) } : item
            );
        });

    }

    return (
        <>
            {obj.counter > 0 && (
                <>
                    <div style={{
                        display: 'flex',
                        background: 'rgba(249, 249, 249, 0.6)',
                    }} key={obj.id}>
                        <img src={obj.src} alt={obj.id} style={{ width: '150px' }} />
                        <div style={{
                            marginLeft: '30px',
                            textAlign: 'center',
                            width: '100%'
                        }}>
                            <p style={{
                                fontWeight: '600',
                                fontSize: '20px',
                                color: '#000',
                                margin: '10px 0px'
                            }}>{obj.title}</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center'
                            }}>
                                <div onClick={() => handleClickIncrement(obj.id)} style={{ cursor: 'pointer' }}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 2.8125C8.28 2.8125 2.8125 8.28 2.8125 15C2.8125 21.72 8.28 27.1875 15 27.1875C21.72 27.1875 27.1875 21.72 27.1875 15C27.1875 8.28 21.72 2.8125 15 2.8125ZM15 4.6875C20.7066 4.6875 25.3125 9.29344 25.3125 15C25.3125 20.7066 20.7066 25.3125 15 25.3125C9.29344 25.3125 4.6875 20.7066 4.6875 15C4.6875 9.29344 9.29344 4.6875 15 4.6875ZM14.0625 9.375V14.0625H9.375V15.9375H14.0625V20.625H15.9375V15.9375H20.625V14.0625H15.9375V9.375H14.0625Z" fill="#FF2525" />
                                    </svg>
                                </div>

                                <p style={{
                                    fontWeight: '600',
                                    fontSize: '25px',
                                    color: '#000',
                                    margin: '0px 20px'
                                }}>{obj.counter}</p>

                                <div onClick={() => handleClickDicrincrement(obj.id)} style={{ cursor: 'pointer', top: '2px' }}>
                                    <svg width="24" height="24" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23ZM11.5 20.7C13.94 20.7 16.28 19.7307 18.0054 18.0054C19.7307 16.28 20.7 13.94 20.7 11.5C20.7 9.06001 19.7307 6.71995 18.0054 4.99462C16.28 3.26928 13.94 2.3 11.5 2.3C9.06001 2.3 6.71995 3.26928 4.99462 4.99462C3.26928 6.71995 2.3 9.06001 2.3 11.5C2.3 13.94 3.26928 16.28 4.99462 18.0054C6.71995 19.7307 9.06001 20.7 11.5 20.7ZM17.25 10.35V12.65H5.75V10.35H17.25Z" fill="#FF2525" />
                                    </svg>
                                </div>
                            </div>

                            <p style={{
                                fontWeight: '600',
                                fontSize: '25px',
                                color: '#0abe06',
                                margin: '0'
                            }}>{priceCard}$</p>
                        </div>
                    </div>
                    <hr style={{ margin: '20px 0px' }} />
                </>
            )}

        </>
    );
}

