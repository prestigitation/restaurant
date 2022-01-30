import Button from '../../Button'
import './index.scss'

import product_image from '../../../img/menu_product_image.png'

export interface MenuProduct {
    title: string,
    price: number,
    description: string,
    isRecommended?: boolean
}

function Product({title, price, description, isRecommended = false}: MenuProduct) {
    return (
        <div className="product__card-menu">
            {isRecommended ? 
            <div className="product__card-menu_recommend"> 
                <Button 
                    text="RECOMMENDED"
                    textColor='black'
                    backgroundColor="#D67E34"
                    fontSize={13}
                    width={124}
                    height={36}                    
                />
            </div> : ''
            }
            <div className="product__card-menu_content">
                <div className="product__card-menu_image">
                    <div className="product__card-menu_image_inner">
                        <div className="product__card-menu_price">
                            {price}
                        </div>
                    </div>
                </div>
                <div className="product__card-menu_title">
                    {title}
                </div>
                <div className="product__card-menu_description">
                    {description}
                </div>
                <Button  
                    text="ЗАКАЗАТЬ"
                    backgroundColor='#D67E34'
                    width={220}
                    fontSize={16}
                />
            </div>
        </div>
    )
}

export default Product