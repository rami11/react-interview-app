import { useState } from "react";

function SelectFilter({placeholder, options, onSelectChanged, onResetClicked}) {
    const [selectedOption, setSelectedOption] = useState(null);

    const optionElements = options && options.map(option => (
        <option key={option.id} value={option.name}>{option.name}</option>
    ));

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedOption(selectedOption);
        onSelectChanged(selectedOption);
    }

    const handleResetClick = () => {
        setSelectedOption('');
        onResetClicked('');
    }

    return (
        <>
            <select onChange={handleSelectChange} value={selectedOption}>
                <option value="">{placeholder}</option>
                {optionElements}
            </select>
            <button onClick={handleResetClick}>x</button>
        </>
    );
}

export default SelectFilter;
