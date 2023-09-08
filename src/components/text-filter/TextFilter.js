function TextFilter({onTextChange}) {
    return (
        <input type="text" onChange={(event) => onTextChange(event.target.value)} />
    );
}

export default TextFilter;