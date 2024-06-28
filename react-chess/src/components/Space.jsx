export default function Space({color, children}) {
    return (
        <div className={`space ${color}`}>{children}</div>
    )
}