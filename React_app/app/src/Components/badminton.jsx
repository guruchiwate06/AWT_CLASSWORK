import { useState,useEffect } from 'react';



const Badminton = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

   
useEffect(()=> {

  console.log("render");
   
},[count1,count1]);

    return (
        <div>
            <h2>Badminton</h2>

            <div>
                <h2>Player 1: {count1}</h2>
                <button onClick={() => setCount1(count1 + 1)}>add</button>
                <button onClick={() => setCount1(count1 - 1)}>sub</button>
            </div>

            <div>
                <h2>Player 2: {count2}</h2>
                <button onClick={() => setCount2(count2 + 1)}>add</button>
                <button onClick={() => setCount2(count2 - 1)}>sub</button>
            </div>
        </div>
    );
};

export default Badminton;