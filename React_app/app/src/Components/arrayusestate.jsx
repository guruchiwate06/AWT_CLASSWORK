import { useState } from 'react';

const State1 = () => {
    const [names, setNames] = useState(['Rajguru', 'Jeel']);

    function addName() {
        setNames([...names, 'Ali']);
    }

    function removeName() {
        setNames(names.slice(0, -1));
    }

    return (
        <div>
            <h2>Names List</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button onClick={addName}>Add</button>
            <button onClick={removeName}>Remove</button>
        </div>
    );
};

export default State1;