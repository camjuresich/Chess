export default function Space({color, children, handleClick}) {

    return (
        <div onClick={handleClick} className={`space ${color}`}>{children}</div>
    )
}