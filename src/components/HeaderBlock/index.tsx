import './index.scss'

import header_block_image from '../../img/header_block_image.png'
import Title from '../Title'

export interface HeaderBlockProps {
    id?: number,
    header_text: string,
    highlighed_header_text: string,
    description: React.ReactNode
}

function HeaderBlock({header_text, highlighed_header_text, description}: HeaderBlockProps) {
    return (
        <div className="header__block">
            <div className="header__block-wrapper">
                <div className="header__block-image">
                    <img src={header_block_image} alt="header_image" />
                </div>
                <Title highlighted_text={highlighed_header_text} text={header_text} />
                <div className="header__block-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock