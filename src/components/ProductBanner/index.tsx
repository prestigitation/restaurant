import Title from '../Title'
import './index.scss'
import product_banner_image from '../../img/product_banner_image.png'
import product_image from '../../img/product_image.png'
import Product from './Product'

export interface BannerProduct {
    imageLink: string,
    name: string,
    price: string
}

function ProductBanner() {
    const bannerProduct: BannerProduct = {
        imageLink: product_image,
        name: 'Гамбургер мини',
        price: '220 ₽'
    }
    return (
        <div className="product__banner">
            <div className="product__banner-title text__title-header">
                <Title 
                    text='Наши' 
                    highlighted_text='Блюда' 
                    second_color="#ff7400"
                    first_font_size={54}
                    second_font_size={54}
                    mobile_second_font_size={40}
                    mobile_first_font_size={40} 
                />
            </div>
            <div className="product__banner-content">
                <div>
                    <img className="product__banner-image" src={product_banner_image} alt="product_banner_image" />
                </div>
                <div className="product__banner-products">
                    {Array.from(Array(3)).map(number => <Product product={bannerProduct} key={number} />)}
                </div>
            </div>
        </div>
    )
}

export default ProductBanner