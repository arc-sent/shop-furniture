import WelcomePage from "../componentMain/componentBody/WelcomePage";
import Wrapper from "../Wrapper";
import welcomePageAboutImage from '../../photos/WelcomePageAbout.png'
import HeadingAbout from "./componentBodyAbout/HeadingAbout";
import SofaAbout from '../../photos/SofaAbout.png';
import { aboutData } from "./componentBodyAbout/aboutData";
import CardAbout from "./componentBodyAbout/cardAbout";
import Pedestal1 from '../../photos/pedestal1.png';
import Pedestal from '../../photos/pedestal2.png';
import Footer from "../Footer";
import { useContext } from "react";
import { FurnitureContext } from "../../createContext";
import { useEffect } from "react";

export default function AboutBody() {
    const { setActive } = useContext(FurnitureContext);
    useEffect(() => {
        setActive(1);
    }, [setActive]); 
    return (
        <>
            <Wrapper>
                <div style={{ marginTop: '110px' }}>
                    <WelcomePage src={welcomePageAboutImage} />
                </div>

                <HeadingAbout>
                    О компании
                </HeadingAbout>

                <div className="wrappAboutTheCompany">
                    <img src={SofaAbout} className="SofaAbout"></img>
                    <p className="textAboutTheCompany">
                        <span>Shop Furniture</span> — это ваш надежный партнер в создании уютного и стильного интерьера, который отражает вашу индивидуальность и соответствует вашим потребностям. Мы понимаем, что каждый дом — это уникальное пространство, и именно поэтому мы предлагаем широкий ассортимент мебели, который удовлетворит вкусы даже самых требовательных клиентов.
                    </p>
                </div>

                <HeadingAbout>
                    Почему именно мы?
                </HeadingAbout>

                <div className="wrapperCardAbout">
                    {aboutData.map(item => {
                        return <CardAbout obj={item} key={item.id} />
                    })}
                </div>

                <HeadingAbout>
                    Наши партнеры
                </HeadingAbout>

                <div className="wrapperAboutVerticalCard">
                    <div className="blockInfoAboutVerticalCard">
                        <h1>Panamar</h1>
                        <p>Компания Panamar — это известный производитель и поставщик мебели, который специализируется на создании стильных и функциональных решений для интерьеров. Она предлагает широкий ассортимент продукции, включая мебель для жилых и коммерческих помещений.</p>
                    </div>
                    <img src={Pedestal1} />
                </div>

                <div className="wrapperAboutVerticalCard2">
                    <img src={Pedestal} />
                    <div className="blockInfoAboutVerticalCard">
                        <h1>Giorgetti</h1>
                        <p>Giorgetti — это итальянская компания, основанная в 1898 году, известная своим высококачественным дизайном мебели и акцентом на традиционные ремесленные техники. Она расположена в Модене, Италия, и с тех пор зарекомендовала себя как один из ведущих производителей мебели премиум-класса.</p>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}