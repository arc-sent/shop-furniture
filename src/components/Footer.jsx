export default function Footer() {
    return (
        <div className="Footer">
            <h1 className="TitleFooter">Shop furniture</h1>

            <div className="FooterWrapperInfo">
                <div className="textAboutFooter textAboutFooterLeft">
                    <h3 className="HeaderFooter">О нас</h3>
                    <p className="text"><span>Shop Furniture</span> — это ваш надежный партнер в создании уютного и стильного интерьера, который отражает вашу индивидуальность и соответствует вашим потребностям</p>
                </div>
                <div className="textAboutFooter">
                    <h3 className="HeaderFooter">Контакты</h3>
                    <div style={{ marginBottom: '10px' }}>
                        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.9999 20.2035C18.0082 24.4035 7.82656 14.3135 11.8332 10.0969C14.2799 7.52186 11.5166 4.58019 9.98656 2.41519C7.11489 -1.64314 0.813226 3.96019 1.00323 7.52519C1.60823 18.7685 13.7699 32.0919 25.5466 30.9285C29.2299 30.5652 33.4632 23.9119 29.2366 21.4802C27.1249 20.2635 24.2232 17.8635 21.9999 20.2019"
                                stroke="white"
                                strokeWidth="1.5625"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>


                        <a className="num" href="tel:+7(978)-999-99-00">+7(978)-999-99-00</a>
                    </div>

                    <div >
                        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.9999 20.2035C18.0082 24.4035 7.82656 14.3135 11.8332 10.0969C14.2799 7.52186 11.5166 4.58019 9.98656 2.41519C7.11489 -1.64314 0.813226 3.96019 1.00323 7.52519C1.60823 18.7685 13.7699 32.0919 25.5466 30.9285C29.2299 30.5652 33.4632 23.9119 29.2366 21.4802C27.1249 20.2635 24.2232 17.8635 21.9999 20.2019"
                                stroke="white"
                                strokeWidth="1.5625"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>


                        <a className="num" href="tel:+7(978)-888-99-12">+7(978)-888-99-12</a>
                    </div>

                </div>
            </div>
        </div>
    )
}