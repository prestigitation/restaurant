import './index.scss'

interface TitleProps {
    text: string,
    highlighted_text?: string,
    first_font_size?: number,
    second_font_size?: number,
    mobile_first_font_size?: number,
    mobile_second_font_size?: number,
    width?: number,
    reverse?: boolean,
    first_color?: string,
    second_color?: string,
    has_space?: boolean
}
function Title({reverse = false, width,text, highlighted_text, first_font_size = 26, second_font_size = 26, mobile_first_font_size = 26, mobile_second_font_size = 26, second_color = '#BC9060', first_color = 'black', has_space = true}: TitleProps) {
    const titleStyle = {
        width: width + 'px'
    }
    const firstPartStyle = {
        fontSize: window.screen.width > 768 ? first_font_size : mobile_first_font_size + 'px',
        color: first_color
    }
    const secondPartStyle = {
        fontSize: window.screen.width > 768 ? second_font_size : mobile_second_font_size + 'px',
        color: second_color,
    }
    const spaceStyle = {
        display: has_space ? 'inline' : 'none'
    }
    const titlePartFirst = <span style={firstPartStyle}> {text} <span style={spaceStyle}>&nbsp;</span></span>
    const titlePartSecond = <span style={secondPartStyle}> {highlighted_text} </span>
    return (
        <div className="title" style={titleStyle}>
            {reverse ? titlePartSecond : titlePartFirst}
            {reverse ? titlePartFirst : titlePartSecond}
        </div>
    )
}
export default Title