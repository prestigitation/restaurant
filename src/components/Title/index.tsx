import './index.scss'

interface TitleProps {
    text: string,
    highlighted_text: string,
    first_font_size?: number,
    second_font_size?: number,
    width?: number,
    reverse?: boolean,
    second_color?: string
}
function Title({reverse = false, width,text, highlighted_text, first_font_size = 26, second_font_size = 26, second_color = '#BC9060'}: TitleProps) {
    const titleStyle = {
        width: width + 'px'
    }
    const firstPartStyle = {
        fontSize: first_font_size + 'px',
    }
    const secondPartStyle = {
        fontSize: second_font_size + 'px',
        color: second_color,
    }
    const titlePartFirst = <span style={firstPartStyle}> {text} &nbsp;</span>
    const titlePartSecond = <span style={secondPartStyle}> {highlighted_text} </span>
    return (
        <div className="title" style={titleStyle}>
            {reverse ? titlePartSecond : titlePartFirst}
            {reverse ? titlePartFirst : titlePartSecond}
        </div>
    )
}
export default Title