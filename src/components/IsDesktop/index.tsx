interface ViewportProps {
    width: number,
    truly?: React.ReactNode,
    falsy?: React.ReactNode
}
export default function IsDesktop({width, truly, falsy} : ViewportProps) {
    return <>{width > 768 ? truly : falsy}</>;
}