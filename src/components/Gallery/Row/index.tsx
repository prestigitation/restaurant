import './index.scss'
import gallery_cups from '../../../img/gallery_cups.png'
import gallery_coffee from '../../../img/gallery_coffee.png'
import gallery_soup from '../../../img/gallery_soup.png'

interface GalleryRowProps {
    reverse?: boolean
}

function GalleryRow({reverse = false}: GalleryRowProps) {
    let direction
    direction = 'row' as 'column'
    if(reverse) {
        direction = 'row-reverse' as 'column'
    }
    if(window.screen.width < 768) {
        direction = 'column' as 'column'
    }
    const rowStyle = {
        flexDirection: direction,
        marginTop: reverse ? '25px' : '60px'
    }

    return (
        <div className="gallery__row" style={rowStyle}>
            <div className="gallery__row-full_size">
                <img src={gallery_cups} className="gallery__row-image" alt="cups" />
            </div>
            <div className="gallery__row-partial">
                <img className="gallery__row-image" src={gallery_coffee} alt="coffee" />
                <img src={gallery_soup} className="gallery__row-image" alt="coffee" />
            </div>
        </div>
    )
}

export default GalleryRow