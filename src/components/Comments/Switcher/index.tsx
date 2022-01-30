import './index.scss'

interface SwitcherProps {
    isActive: boolean,
    index: number,
    onCommentChange: Function
}

function Switcher({isActive = false, index, onCommentChange}: SwitcherProps) {
    const switcherStyle = {
        background: isActive ? 'white': '#C4C4C4',
        border: isActive ? '1px solid #FF7400' : 'none'
    }
    const switchComment = (index: number) => onCommentChange(index)
    return (
        <div className="switcher" style={switcherStyle} onClick={() => switchComment(index)} />
    )
}

export default Switcher