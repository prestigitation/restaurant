import './index.scss'

interface ButtonProps {
    backgroundColor?: string,
    textColor?: string,
    width?: number,
    fontSize?: number,
    height?: number,
    text: string
}
interface ButtonStyle {
    backgroundColor: string,
    color: string,
    width: string,
    fontSize: string,
    height: string
} 

function Button({backgroundColor = '#FF7400', textColor = 'white', text, fontSize = 14, width = 147, height = 50 }: ButtonProps) {
    const buttonStyle: ButtonStyle = {
        backgroundColor,
        color: textColor,
        width: width + 'px',
        fontSize: fontSize + 'px',
        height: height + 'px'
    }
    return (
        <div className="button__wrapper" style={buttonStyle}>
            <span className="button__text">
                {text}
            </span>
        </div>
    )
}

export default Button