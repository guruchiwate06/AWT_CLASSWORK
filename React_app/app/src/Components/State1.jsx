import { useState } from 'react';

const State1 = () => {
    const [count, setName] = useState(0);

    function change() {
        setName(count+1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setName(count+1)}>add</button>
            <button onClick={()=>setName(count-1)}>sub</button>
        </div>
    );
};

export default State1;