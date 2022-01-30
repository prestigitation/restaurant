import Title from '../Title'
import './index.scss'

import cook_first from '../../img/cook_first.png'
import cook_second from '../../img/cook_second.png'
import cook_third from '../../img/cook_third.png'

interface Cook {
    imageLink: string
}

function Cooks() {
    const cooks: Cook[] = [
        {imageLink: cook_first},
        {imageLink: cook_second},
        {imageLink: cook_third}
    ]
    return (
        <div className="cooks">
            <div className="cooks__title text__title-header">
                <Title
                    text='Наши'
                    highlighted_text='Повара'
                    second_color='#FF7400'
                    first_font_size={54}
                    second_font_size={54}
                    mobile_first_font_size={40}
                    mobile_second_font_size={40}
                />
            </div>
            <div className="cooks__images">
                {cooks.map((cook, index) => <img src={cook.imageLink} alt={`cook${index}`} />)}
            </div>
        </div>
    )
}

export default Cooks