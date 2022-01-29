import { HeaderBlockProps } from '../HeaderBlock'

import logo from '../../img/logo.png'
import banner_line from '../../img/banner_line.png'
import cart from '../../img/cart.png'
import phone from '../../img/phone.png'
import mobile_menu from '../../img/mobile_menu.png'

import IsDesktop from '../IsDesktop'
import Button from '../Button'
import HeaderBlock from '../HeaderBlock'

interface MainBannerProps {
    width: number
}

function MainBanner({width}: MainBannerProps) {
    const headerBlockData: HeaderBlockProps[] = [
        {
            id: 0,
            description: `В нашем заведении царит магическая атмосфера
            наполненная вкусными ароматами`,
            highlighed_header_text: "Атмосфера",
            header_text: "Магическая"
        },
        {
            id: 1,
            description: `Качество нашей 
            Еды - отменное!`,
            header_text: "Лучшее качество",
            highlighed_header_text: "Еды"
        },
        {
            id: 2,
            description: `Стоимость нашей Еды
            зависит только от ее
            количества. Качество
            всегда на высоте!`,
            header_text: "Недорогая",
            highlighed_header_text: "Еда"
        }
    ]
    return (
        <>
            <header className="page__header">
                <img className="page__logo" src={logo} alt="logo" />
                <nav className="page__header-nav">
                <a href="#" className="text__link text__white">
                    Главная
                </a>
                <a href="#" className="text__link text__white">
                    Меню
                </a>
                <a href="#" className="text__link text__white">
                    О нас
                </a>
                <a href="#" className="text__link text__white">
                    Бронь
                </a>
                <span className="page__header-nav_cart">
                    <img src={cart} alt="cart_image"/>
                </span>
                <span className="page__header-nav_line" />
                <span className="page__header-nav_contacts text__white">
                    <div className="contacts__phone">
                    <img alt="phone_number" src={phone} />
                    <span className="contacts__number">
                        +999-888-76-54
                    </span>
                    </div>
                    <div className="contacts__text">
                    Свяжитесь с нами для бронирования
                    </div>
                </span>
                <div className="page__header-nav_button">
                    <Button text="ЗАКАЗ СТОЛИКА" />
                </div>
                </nav>
                <nav className="page__header-nav_mobile">
                <img src={mobile_menu} alt="mobile menu" />
                </nav>
            </header>
            <div className="page__banner-title text__white">
                <div className="text__orange text__title-small">
                Добро пожаловать <IsDesktop width={width} truly="в" />
                </div>
                <div className="text__orange text__title-big">
                <IsDesktop width={width} falsy="В н" truly="Н"/>аш ресторан
                </div>
                <div className="page__banner-title_footer">
                <img className="page__banner-line" src={banner_line} alt="banner_line" />
                <div className="page__banner-title_footer_text text__white"> 
                    ДОМ ЛУЧШЕЙ ЕДЫ
                </div>
                <img className="page__banner-line" src={banner_line} alt="banner_line" />
                </div>
                <div className="page__banner-button">
                <IsDesktop 
                    width={width} 
                    truly={<Button text="VIEW MENU"/>} 
                    falsy={<Button text="МЕНЮ" />} 
                />
                </div>
            </div>
            <div className="page__banner-products">
                {headerBlockData.map(block => 
                <HeaderBlock 
                key={block.id} 
                header_text={block.header_text} 
                description={block.description} 
                highlighed_header_text={block.highlighed_header_text} 
                />)}
            </div>
        </>
    )
}

export default MainBanner