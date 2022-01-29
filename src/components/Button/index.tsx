import './index.scss'

interface ButtonProps {
    backgroundColor?: string,
    textColor?: string,
    text: string
}
interface ButtonStyle {
    backgroundColor: string,
    color: string
} 

function Button({backgroundColor = '#FF7400', textColor = 'white', text}: ButtonProps) {
    const buttonStyle: ButtonStyle = {
        backgroundColor,
        color: textColor
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