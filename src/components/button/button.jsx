export default function Button({ text, bgColor, color, bgHover, extraClass = "", trailingIcon = "" }) {
    return <button className={`py-2 px-3 rounded ${bgColor} ${bgHover} ${color} ${extraClass}`}>
        <span className={`${color} ${trailingIcon ? "mr-3" : ""}`}>{text}</span>
        {trailingIcon}
    </button>
}
