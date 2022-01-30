import './index.scss'
import { BannerProduct } from '../index'
import dots from '../../../img/dots.png'
interface ProductProps {
    product: BannerProduct
}
function Product({product}: ProductProps) {
    return (
        <div className="product">
            <span className="product__card">
                <span className="product__image">
                    <img className="product__image-inner" src={product.imageLink} alt="img_link" />
                </span>
                <span className="product__info">
                    <span className="product__name">
                        {product.name}
                    </span>
                    <span className="product__dots">
                        <img src={dots} alt="dots" />
                    </span>
                    <span className="product__price">
                        {product.price}
                    </span>
                </span>
            </span>
        </div>
    )
}

export default Product