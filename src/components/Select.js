function Select({ option, onChange, style, defaultValue }) {
    return (
        <select className="form-select" style={style} defaultValue={defaultValue} onChange={onChange}>
            {
                option.map((opt) => <option key={opt} value={opt}>{opt}</option>)
            }
        </select>
    )
}

export default Select

//  { 'flexGrow': '.1' }