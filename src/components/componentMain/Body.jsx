import WelcomePage from './componentBody/WelcomePage';
import welcomeImage from '../../photos/WelcomePage.png'
import CardFurniture from "./componentBody/CardFurniture";
import { useContext } from "react";
import { FurnitureContext } from '../../createContext';
import Footer from '../Footer';


export default function Body() {
    const { products, furnitureItems , setActive } = useContext(FurnitureContext);
    setActive(0)
    return (
        <>
            <div style={{ marginTop: '110px' }}>
                <WelcomePage src={welcomeImage} />
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {products.map((item) => {
                        return <CardFurniture obj={item} key={item.id} />;
                    })}
                </div>
            </div>
        </>

    )
}



