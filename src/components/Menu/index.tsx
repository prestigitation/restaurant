import Title from '../Title'
import './index.scss'
import Product, { MenuProduct } from './Product'

function Menu() {
    const menuProducts: MenuProduct[] = [
        {
            title: 'Гамбургер макси',
            description: 'Максимально толстый слой мяса',
            price: 420,
            isRecommended: true
        },
        {
            title: 'Гамбургер макси',
            description: 'Максимально толстый слой мяса',
            price: 420,
            isRecommended: false
        },
        {
            title: 'Гамбургер макси',
            description: 'Максимально толстый слой мяса',
            price: 420,
            isRecommended: false
        },
    ]
    
    return (
        <div className="menu">
            <Title text='Наше меню' first_font_size={54} first_color='white' />
            <div className="menu__products">
                {menuProducts.map((product, index) => <Product key={index} title={product.title} description={product.description} price={product.price} isRecommended={product.isRecommended} />)}
            </div>
        </div>
    )
}

export default Menu