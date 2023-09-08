import { useState } from "react";

function TextFilter({onTextChanged, onResetClicked}) {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        onTextChanged(newText);
    }

    const handleResetClick = () => {
        setText('');
        onResetClicked('');
    }

    return (
        <>
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleResetClick}>x</button>
        </>
    );
}

export default TextFilter;