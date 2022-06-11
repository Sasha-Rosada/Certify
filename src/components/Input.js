import { useState } from "react";

function TextInput({ value, onInput, id, suggestion, placeholder, setUserDataIndex, onSelect }) {


    const [_value, _setValue] = useState(value ?? '');
    const _onInput = (e) => {
        _setValue(e.target.value);
        onInput?.(e.target.value);
    }

    const liCl = (s, i) => {
        _setValue(s);
        onInput?.(s);
        setUserDataIndex?.(i);
        onSelect?.();
    }

    return (
        <div className="d-flex flex-grow-1 position-relative">
            <input type="text" className="form-control" id={id} placeholder={placeholder} autoComplete={'off'} value={_value} onInput={_onInput} />
            <ul id={`data-list-${id}`} className="position-absolute list-group top-100 w-100">
                {
                    suggestion.map(([seggest, i], index) => <li style={LiStyle} onClick={() => liCl(seggest, i)} className="list-group-item text-start" key={`${seggest.split(' ').join()}-${index}`}>{seggest}</li>)
                }
            </ul>
        </div>
    )
}

const LiStyle = {
    cursor: 'pointer'
}

export default TextInput; 