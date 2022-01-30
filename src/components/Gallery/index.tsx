import './index.scss'
import Title from "../Title"
import GalleryRow from './Row'

function Gallery() {
    return (
        <div className="gallery text__title-header">
            <Title 
                text="Галерея"
                highlighted_text="Блюд"
                first_font_size={54}
                second_font_size={54}
                mobile_first_font_size={40}
                mobile_second_font_size={40}
                second_color='#FF7400'
            />
            <div>
                <div className="gallery__aside gallery__aside-left" />
                <div className="gallery__aside gallery__aside-right" />
                <GalleryRow />
                <GalleryRow reverse={true} />
            </div>
        </div>
    )
}

export default Gallery