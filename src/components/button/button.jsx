export default function Button({ text, bgColor, color, bgHover, extraClass = "" }) {
    return <button className={`py-2 px-3 rounded ${bgColor} ${bgHover} ${color} ${extraClass}`}>
        {text}
    </button>
}
