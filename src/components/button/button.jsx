export default function Button({ text, bgColor, color, extraClass = "" }) {
    return <button className={`py-2 px-3 rounded ${bgColor} ${color} ${extraClass}`}>
        {text}
    </button>
}
